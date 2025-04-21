import { Component, OnInit } from '@angular/core';
import { OffreEmploi } from '../../../../models/OffreEmploi';
import { OffreEmploiService } from '../../../../services/offre-emploi.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-annonce-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './annonce-list.component.html',
  styleUrl: './annonce-list.component.css'
})
export class AnnonceListComponent implements OnInit {
  offres: OffreEmploi[] = [];

  page: number = 1;
  pageSize: number = 5;


  constructor(private offreService: OffreEmploiService, private router: Router) {}


  ngOnInit(): void {
    this.chargerOffres();
  }

  chargerOffres() {
    this.offreService.getAllOffres().subscribe({
      next: data => {
        console.log("Offres récupérées :", data);
        this.offres = data;
      },
      error: err => {
        console.error("Erreur lors de la récupération des offres :", err);
      }
    });
  }
  

  modifierOffre(id: number) {
    this.router.navigate(['/rh/annonce/edit', id]);
  }

  supprimerOffre(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûr(e) ?',
      text: 'Cette offre sera définitivement supprimée.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler'
    }).then(result => {
      if (result.isConfirmed) {
        this.offreService.deleteOffre(id).subscribe(() => {
          Swal.fire('Supprimée !', 'L\'offre a été supprimée avec succès.', 'success');
          this.chargerOffres();
        }, error => {
          Swal.fire('Erreur', 'La suppression a échoué.', 'error');
        });
      }
    });
  }

  ajouterOffre() {
    this.router.navigate(['rh/annonce/create']);
  }

  afficherCompetences(competences: string[]) {
    Swal.fire({
      title: 'Liste des compétences',
      html: `<ul style="text-align:left;">${competences.map(c => `<li>${c}</li>`).join('')}</ul>`,
      icon: 'info',
      confirmButtonText: 'Fermer'
    });
  }


  get offresPaginees(): OffreEmploi[] {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.offres.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.offres.length / this.pageSize);
  }

  
}