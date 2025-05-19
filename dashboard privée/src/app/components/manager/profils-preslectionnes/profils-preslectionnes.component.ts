import { Component, OnInit } from '@angular/core';
import { CandidatureService } from '../../../services/candidature.service';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-profils-preslectionnes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profils-preslectionnes.component.html',
  styleUrl: './profils-preslectionnes.component.css'
})
export class ProfilsPreslectionnesComponent implements OnInit {
  candidatures: any[] = [];
  filteredCandidatures: any[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor(private candidatureService: CandidatureService) {}

  ngOnInit(): void {
    this.candidatureService.getCandidaturesValideesParExpert().subscribe({
      next: (data) => {
        this.candidatures = data;
        this.filteredCandidatures = [...this.candidatures]; // copie initiale
      },
      error: (err) => {
        console.error('Erreur lors du chargement :', err);
      }
    });
  }
 //pagination 
  get paginatedCandidatures(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredCandidatures.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredCandidatures.length / this.itemsPerPage);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  // Exporter en PDF
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
      doc.addImage(img, 'PNG', 160, 6, 35, 12); // Logo à droite
  
      // titre principal
      doc.setFontSize(14);
      doc.setTextColor(33, 37, 41); // noir foncé
      const title = "Liste des Candidatures validées par l'expert technique";
      doc.setFontSize(14);
      doc.setTextColor(33, 37, 41); // noir foncé
      
      const pageWidth = doc.internal.pageSize.getWidth();
      const textWidth = doc.getTextWidth(title);
      const x = (pageWidth - textWidth) / 2;
      
      doc.text(title, x, 28);

      // Générer les lignes du tableau
      const rows = this.filteredCandidatures.map(c => {
        const details = c.resultats.map((r: any) =>
          `Test: ${r.test?.titre}\nScore: ${r.score}St atut: ${r.statut}`
        ).join('\n\n');
        return [c.nomComplet, c.email, c.posteSouhaite, details, c.etat];
      });
  
      // Créer le tableau
      autoTable(doc, {
        startY: 35, // un peu plus bas à cause du titre
        head: [['Nom', 'Email', 'Poste', 'Détails', 'État']],
        body: rows,
        styles: {
          fontSize: 9,
          cellPadding: 4,
          overflow: 'linebreak'
        },
        headStyles: {
          fillColor: [48, 83, 170], // bleu foncé
          textColor: 255,
          fontStyle: 'bold'
        },
        alternateRowStyles: {
          fillColor: [240, 240, 240],
        },
        columnStyles: {
          3: { cellWidth: 60 }, // colonne Détails plus large
        },
        margin: { top: 30 },
      });
  
      doc.save('candidatures_validees.pdf');
    };
  }
  
  
}
