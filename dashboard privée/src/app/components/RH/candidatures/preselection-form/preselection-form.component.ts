import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CandidatureService } from '../../../../services/candidature.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal, { SweetAlertIcon } from 'sweetalert2';


@Component({
  selector: 'app-preselection-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './preselection-form.component.html',
  styleUrl: './preselection-form.component.css'
})
export class PreselectionFormComponent {
  @Input() candidatureId!: number;
  @Input() etatActuel: string = 'EN_ATTENTE';
  @Output() preselectionDone = new EventEmitter<void>();

  constructor(private candidatureService: CandidatureService) {}

  onEtatChange(newEtat: string) {
    if (!newEtat) return;
  
    this.candidatureService.completePreselectionTask({
      candidatureId: this.candidatureId,
      decision: newEtat
    }).subscribe({
      next: () => {
        let message = '';
        let icon: SweetAlertIcon = 'success';

  
        if (newEtat === 'ACCEPTEE') {
          message = 'La candidature a été acceptée avec succès.';
        } else if (newEtat === 'REFUSEE') {
          message = 'La candidature a été refusée.';
          icon = 'info';
        } else {
          message = 'État mis à jour.';
        }
  
        Swal.fire({
          icon: icon,
          title: 'Succès',
          text: message,
          timer: 2000,
          showConfirmButton: false
        });
  
        this.preselectionDone.emit();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Impossible de mettre à jour la présélection.'
        });
        console.error("Erreur de présélection :", err);
      }
    });
  }
  
}
  
  



