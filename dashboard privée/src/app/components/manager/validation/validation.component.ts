import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CandidatureService } from '../../../services/candidature.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
export class ValidationComponent {
  candidatures: any[] = [];

  constructor(
    private candidatureService: CandidatureService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.candidatureService.getCandidaturesValideesParExpert().subscribe(data => {
      // Ajoute des champs dynamiques à chaque objet
      this.candidatures = data.map(c => ({
        ...c,
        noteManager: null,
        feedbackManager: '',
        decisionManager: null
      }));
    });
  }

  valider(candidature: any) {
    if (
      candidature.noteManager !== null &&
      candidature.feedbackManager &&
      candidature.decisionManager !== null
    ) {
      const decisionText = candidature.decisionManager ? '✅ Validé' : '❌ Refusé';
  
      Swal.fire({
        title: 'Confirmer la validation ?',
        html: `
          <strong>Nom :</strong> ${candidature.nomComplet}<br/>
          <strong>Poste :</strong> ${candidature.posteSouhaite}<br/>
          <strong>Note :</strong> ${candidature.noteManager} / 10<br/>
          <strong>Feedback :</strong> ${candidature.feedbackManager}<br/>
          <strong>Décision :</strong> ${decisionText}
        `,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#cf2c2c',
        cancelButtonColor: '#999',
        confirmButtonText: 'Oui, valider',
        cancelButtonText: 'Annuler'
      }).then(result => {
        if (result.isConfirmed) {
          const payload = {
            id: candidature.id,
            noteManager: candidature.noteManager,
            feedbackManager: candidature.feedbackManager,
            decisionManager: candidature.decisionManager
          };
  
          this.candidatureService.envoyerValidationManager(payload).subscribe({
            next: () => {
              Swal.fire('Succès', 'Validation envoyée avec succès !', 'success');
            },
            error: () => {
              Swal.fire('Erreur', 'Échec de l\'envoi de la validation', 'error');
            }
          });
        }
      });
    } else {
      Swal.fire('Champs requis', 'Veuillez remplir tous les champs.', 'warning');
    }
  }
  
}