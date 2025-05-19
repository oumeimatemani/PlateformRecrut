import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultatTest } from '../../../models/resultat-test';
import { ResultatService } from '../../../services/resultat.service';
import Swal from 'sweetalert2';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-resultats',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [DatePipe],
  templateUrl: './resultats.component.html',
  styleUrl: './resultats.component.css'
})
export class ResultatsComponent implements OnInit {

  resultats: ResultatTest[] = [];
  filtre: string = '';

  constructor(private resultatService: ResultatService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.chargerResultats();
  }

  chargerResultats() {
    this.resultatService.getAll().subscribe(data => {
      // Retirer les doublons par combinaison test + email
      const uniqueKeys = new Set();
      this.resultats = data.filter(r => {
        const key = `${r.test?.id}-${r.candidature?.email}`;
        if (r.candidature && !uniqueKeys.has(key)) {
          uniqueKeys.add(key);
          return true;
        }
        return false;
      });
    });
  }

  
  loadResultats() {
    this.resultatService.getAll().subscribe(data => {
      this.resultats = data;
    });
  }

  saveResult(resultat: ResultatTest) {
    // Mettre à jour le statut côté frontend avant l'envoi
    resultat.statut = resultat.score >= 60 ? 'REUSSI' : 'ECHOUE';
  
    this.resultatService.updateResultat(resultat).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Succès',
        text: 'Résultat enregistré et statut mis à jour !'
      });
  
      // Mettre à jour localement sans recharger toute la liste
      const r = this.resultats.find(r => r.id === resultat.id);
      if (r) {
        r.score = resultat.score;
        r.statut = resultat.statut;
        r.dateTest = resultat.dateTest;
      }
  
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Une erreur est survenue lors de la mise à jour.'
      });
    });
  }
  

  get resultatsFiltres(): ResultatTest[] {
    if (!this.filtre.trim()) return this.resultats;

    const filtreLower = this.filtre.toLowerCase();
    return this.resultats.filter(r =>
      r.candidature.nomComplet.toLowerCase().includes(filtreLower) ||
      r.candidature.email.toLowerCase().includes(filtreLower)
    );
  }

  exportToExcel(): void {
    const exportData = this.resultats.map(r => ({
      'Nom du candidat': r.candidature.nomComplet,
      'Email': r.candidature.email,
      'Test': r.test.titre,
      'Date de test': new Date(r.dateTest).toLocaleDateString('fr-FR'),
      'Score': r.score,
      'Statut': r.statut
    }));
  
    const worksheet: any = {};
  
    // Ajout date + lieu
    XLSX.utils.sheet_add_aoa(worksheet, [
      [`Date : ${new Date().toLocaleDateString('fr-FR')}`],
      ['Lieu : Tunis, Tunisie 1002']
    ], { origin: 'A1' });
  
    // Ajout données à partir de A4
    XLSX.utils.sheet_add_json(worksheet, exportData, {
      origin: 'A4',
      skipHeader: false
    });
  
    // Appliquer des styles : centré + gras pour l’en-tête
    const range = XLSX.utils.decode_range(worksheet['!ref'] || '');
    for (let row = range.s.r + 3; row <= range.e.r; row++) {
      for (let col = range.s.c; col <= range.e.c; col++) {
        const cellAddress = XLSX.utils.encode_cell({ r: row, c: col });
        const cell = worksheet[cellAddress];
        if (!cell) continue;
  
        cell.s = {
          alignment: { horizontal: 'center' },
          font: row === 3 ? { bold: true } : { bold: false }
        };
      }
    }
  
    worksheet['!cols'] = [
      { wch: 20 },
      { wch: 30 },
      { wch: 25 },
      { wch: 20 },
      { wch: 10 },
      { wch: 12 }
    ];
  
    const workbook: any = {
      SheetNames: ['Résultats'],
      Sheets: { 'Résultats': worksheet }
    };
  
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
      cellStyles: true
    });
  
    const fileName = `resultats_tests_${new Date().getTime()}.xlsx`;
    FileSaver.saveAs(new Blob([excelBuffer], { type: 'application/octet-stream' }), fileName);
  }
  
  
  

  //export les resultat en pdf
  exportToPDF(): void {
    const doc = new jsPDF();
    
    //logo
    const imgUrl = 'assets/images/Tunisys.png'; 
    //date 
    const today = new Date();
    const dateString = today.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    //localisation
    const location = 'Tunis, Tunisie 1002';

    // texte à gauche
    doc.setFontSize(10);
    doc.text(`Date : ${dateString}`, 10, 10);
    doc.text('Tunis, Tunisie 1002', 10, 16);


    // Ajoute logo à droite (en haut)
    const img = new Image();
    img.src = imgUrl;
  
    img.onload = () => {
      doc.addImage(img, 'PNG', 160, 6, 35, 12); // x, y, width, height

      // En-tête de tableau
      const headers = [['Nom', 'Email', 'Test', 'Date', 'Score', 'Statut']];
      const rows = this.resultatsFiltres.map(r => [
        r.candidature.nomComplet,
        r.candidature.email,
        r.test.titre,
        this.datePipe.transform(r.dateTest, 'short'),
        r.score,
        r.statut
      ]);
  
    autoTable(doc, {
      startY: 30, //déplace le tableau vers le bas
      head: [['Nom', 'Email', 'Test', 'Date', 'Score', 'Statut']],
      body: rows,
      styles: { fontSize: 8 },
      headStyles: { fillColor: [198, 20, 41] }, // bordeaux
    });
  
    doc.save(`resultats_tests_${new Date().getTime()}.pdf`);
  };
  }




  
}
