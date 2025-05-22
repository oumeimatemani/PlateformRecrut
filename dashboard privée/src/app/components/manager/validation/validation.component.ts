import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CandidatureService } from '../../../services/candidature.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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
  

  exporterPDF() {
    const doc = new jsPDF();
  
    const imgUrl = 'assets/images/Tunisys.png';
    const today = new Date();
    const dateString = today.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const location = 'Tunis, Tunisie 1002';
  
    doc.setFontSize(10);
    doc.text(`Date : ${dateString}`, 10, 10);
    doc.text(location, 10, 16);
  
    const img = new Image();
    img.src = imgUrl;
  
    img.onload = () => {
      // Logo en haut à droite
      doc.addImage(img, 'PNG', 160, 6, 35, 12);
  
      // Titre
      const title = "Liste finale des Candidatures Affectées";
      doc.setFontSize(14);
      doc.setTextColor(33, 37, 41);
      const pageWidth = doc.internal.pageSize.getWidth();
      const textWidth = doc.getTextWidth(title);
      doc.text(title, (pageWidth - textWidth) / 2, 28);
  
      // Données du tableau
      const rows = this.candidatures.map(c => {
        const decision = c.decisionManager === true ? 'VALIDÉ' : c.decisionManager === false ? 'REFUSÉ' : '-';
        const decisionStyle = c.decisionManager === true
          ? { textColor: [0, 128, 0] } // vert
          : c.decisionManager === false
          ? { textColor: [220, 53, 69] } // rouge
          : {};
  
        return [
          c.nomComplet,
          c.posteSouhaite || '-',
          c.email,
          c.noteManager?.toString() || '-',
          c.feedbackManager || '-',
          { content: decision, styles: decisionStyle }
        ];
      });
  
      // Création du tableau
      autoTable(doc, {
        startY: 35,
        head: [['Nom', 'Poste', 'Email', 'Note', 'Feedback', 'Décision']],
        body: rows,
        styles: {
          fontSize: 9,
          cellPadding: 4,
          overflow: 'linebreak'
        },
        headStyles: {
          fillColor: [189, 19, 19], // #bd1313
          textColor: 255,
          fontStyle: 'bold'
        },
        alternateRowStyles: {
          fillColor: [245, 245, 245]
        },
        columnStyles: {
          4: { cellWidth: 50 },
          5: { halign: 'center' }
        },
        margin: { top: 30 }
      });
  
      doc.save('liste_finale_candidatures.pdf');
    };
  }
  

  
      
}