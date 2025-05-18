import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultatTest } from '../../../models/resultat-test';
import { ResultatService } from '../../../services/resultat.service';
import Swal from 'sweetalert2';

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

  constructor(private resultatService: ResultatService) {}

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

}
