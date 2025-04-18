import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CandidatureService } from '../../../../services/candidature.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-preselection-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './preselection-form.component.html',
  styleUrl: './preselection-form.component.css'
})
export class PreselectionFormComponent {
  @Input() candidatureId!: number;
  @Output() preselectionDone = new EventEmitter<void>();
  @Input() etatActuel: string = 'EN_ATTENTE';  

  decision: string = '';

  constructor(private candidatureService: CandidatureService) {}

  ngOnInit() {
    this.decision = this.etatActuel || 'EN_ATTENTE';
  }
  

  ngOnChanges(changes: SimpleChanges) {
    if (changes['etatActuel']) {
      this.decision = changes['etatActuel'].currentValue;
    }
    
  }


  onSubmit() {
    const payload = {
      candidatureId: this.candidatureId,
      decision: this.decision.toUpperCase() 
    };
  
    console.log("Payload envoyé :", JSON.stringify(payload));
  
    this.candidatureService.completePreselectionTask(payload).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Pré-sélection soumise avec succès ',
          timer: 2000,
          showConfirmButton: false
        });
                this.preselectionDone.emit();
      },
      error: (err) => {
        console.error("Erreur lors de la soumission :", err);
      }
    });
  }
  
  


}
