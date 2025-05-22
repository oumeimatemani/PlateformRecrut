import { Component, OnInit } from '@angular/core';
import { CandidatureService } from '../../../services/candidature.service';
import { ProjetService } from '../../../services/projet.service';
import { Projet } from '../../../models/projet';
import { Candidature } from '../../../models/candidature';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-affectation',
  standalone: true,
  templateUrl: './affectation.component.html',
  styleUrl: './affectation.component.css',
  imports: [CommonModule, FormsModule],
})
export class AffectationComponent implements OnInit {
  candidatures: Candidature[] = [];
  projets: Projet[] = [];

  showAddForm = false;
  editMode = false;
  selectedProjet: Projet | null = null;

  newProjet: Projet = {
    id: 0,
    titre: '',
    technologies: '',
    chefProjet: '',
    dateDebut: '',
    description: ''
  };

  constructor(
    private candidatureService: CandidatureService,
    private projetService: ProjetService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.candidatureService.getCandidaturesValideesParManager().subscribe(data => this.candidatures = data);
    this.loadProjets();
  }

  loadProjets() {
    this.projetService.getAllProjets().subscribe(data => this.projets = data);
  }

  affecter(candidatureId: number, projetId: number) {
    this.http.put(`http://localhost:8080/api/candidatures/${candidatureId}/affecter-projet/${projetId}`, {})
      .subscribe(() => {
        Swal.fire('Succès', 'Candidat affecté au projet avec succès.', 'success');
      });
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
    this.editMode = false;
    this.selectedProjet = null;
    this.resetForm();
  }

  submitAddForm() {
    this.projetService.addProjet(this.newProjet).subscribe(data => {
      this.projets.push(data);
      this.resetForm();
      this.showAddForm = false;
      Swal.fire('Ajouté', 'Projet ajouté avec succès.', 'success');
    });
  }

  editProjet(projet: Projet) {
    this.selectedProjet = { ...projet };
    this.editMode = true;
    this.showAddForm = false;
  }

  submitEditForm() {
    if (this.selectedProjet) {
      this.projetService.updateProjet(this.selectedProjet.id, this.selectedProjet).subscribe(updated => {
        const index = this.projets.findIndex(p => p.id === updated.id);
        if (index !== -1) {
          this.projets[index] = updated;
        }
        this.editMode = false;
        this.selectedProjet = null;
        Swal.fire('Modifié', 'Projet modifié avec succès.', 'success');
      });
    }
  }

  supprimerProjet(id: number) {
    Swal.fire({
      title: 'Confirmer la suppression',
      text: 'Voulez-vous vraiment supprimer ce projet ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler'
    }).then(result => {
      if (result.isConfirmed) {
        this.projetService.deleteProjet(id).subscribe(() => {
          this.projets = this.projets.filter(p => p.id !== id);
          Swal.fire('Supprimé', 'Projet supprimé avec succès.', 'success');
        });
      }
    });
  }

  resetForm() {
    this.newProjet = {
      id: 0,
      titre: '',
      technologies: '',
      chefProjet: '',
      dateDebut: '',
      description: ''
    };
  }

   //export PDF :
  exporterCandidaturesPDF() {
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
  
    // Informations en haut à gauche
    doc.setFontSize(10);
    doc.text(`Date : ${dateString}`, 10, 10);
    doc.text(location, 10, 16);
  
    const img = new Image();
    img.src = imgUrl;
  
    img.onload = () => {
      // Logo à droite
      doc.addImage(img, 'PNG', 160, 6, 35, 12);
  
      // Titre centré
      const title = "Liste d'affectation des projets";
      doc.setFontSize(14);
      doc.setTextColor(33, 37, 41);
      const pageWidth = doc.internal.pageSize.getWidth();
      const textWidth = doc.getTextWidth(title);
      const x = (pageWidth - textWidth) / 2;
      doc.text(title, x, 28);
  
      // Contenu du tableau
      const rows = this.candidatures.map(c => [
        c.nomComplet,
        c.email,
        c.posteSouhaite || '-'
      ]);
  
      // Génération du tableau
      autoTable(doc, {
        startY: 35,
        head: [['Nom', 'Email', 'Poste']],
        body: rows,
        styles: {
          fontSize: 9,
          cellPadding: 4,
          overflow: 'linebreak'
        },
        headStyles: {
          fillColor: [189, 19, 19], 
          textColor: 255,
          fontStyle: 'bold'
        },
        alternateRowStyles: {
          fillColor: [245, 245, 245],
        },
        margin: { top: 30 },
      });
  
      doc.save('liste_affectation.pdf');
    };
  }
  

  
  exporterProjetsPDF() {
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
      // Logo à droite
      doc.addImage(img, 'PNG', 160, 6, 35, 12);
  
      // Titre centré
      const title = "Liste des Projets de l'entreprise";
      doc.setFontSize(14);
      doc.setTextColor(33, 37, 41);
      const pageWidth = doc.internal.pageSize.getWidth();
      const textWidth = doc.getTextWidth(title);
      const x = (pageWidth - textWidth) / 2;
      doc.text(title, x, 28);
  
      // Préparer les lignes du tableau
      const rows = this.projets.map(p => [
        p.titre,
        p.technologies,
        p.chefProjet,
        p.dateDebut,
        p.description
      ]);
  
      // Créer le tableau
      autoTable(doc, {
        startY: 35,
        head: [['Titre', 'Technologies', 'Chef de Projet', 'Date Début', 'Description']],
        body: rows,
        styles: {
          fontSize: 9,
          cellPadding: 4,
          overflow: 'linebreak'
        },
        headStyles: {
          fillColor: [189, 19, 19], // rouge foncé (#bd1313)
          textColor: 255,
          fontStyle: 'bold'
        },
        alternateRowStyles: {
          fillColor: [245, 245, 245]
        },
        columnStyles: {
          4: { cellWidth: 60 } // Description plus large
        },
        margin: { top: 30 }
      });
  
      doc.save('projets.pdf');
    };
  }
  
  
 
}
