import { Component, OnInit } from "@angular/core";
import { CandidatureService } from "../../../../services/candidature.service";
import { PreselectionFormComponent } from "../preselection-form/preselection-form.component";
import { Candidature } from "../../../../models/candidature";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-candidature-list',
  standalone: true,
  imports: [CommonModule, RouterModule, PreselectionFormComponent, FormsModule],
  templateUrl: './candidature-list.component.html',
  styleUrl: './candidature-list.component.css'
})

export class CandidatureListComponent implements OnInit {
  candidatures: Candidature[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 8;

  filterPoste: string = '';
  filteredCandidatures: Candidature[] = [];

  selectedCandidature: Candidature | null = null;


  constructor(private candidatureService: CandidatureService) {}

  ngOnInit() {
    this.fetchCandidatures();
    console.log("Chargement des candidatures...");
  }
  

  fetchCandidatures() {
    this.candidatureService.getAllCandidatures().subscribe((data: Candidature[]) => {
      this.candidatures = data;
      this.filteredCandidatures = data;
    });
  }
  

  deleteCandidature(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûr(e) ?',
      text: 'Cette action supprimera définitivement la candidature.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.candidatureService.deleteCandidature(id).subscribe(() => {
          this.candidatures = this.candidatures.filter(c => c.id !== id);
          this.filteredCandidatures = this.filteredCandidatures.filter(c => c.id !== id);
  
          Swal.fire({
            icon: 'success',
            title: 'Candidature supprimée avec succès !',
            showConfirmButton: false,
            timer: 1500
          });
        }, error => {
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Une erreur est survenue pendant la suppression.',
          });
          console.error("Erreur lors de la suppression :", error);
        });
      }
    });
  }
  
  

  viewDetails(c: Candidature) {
    this.selectedCandidature = c;
    const modal = new (window as any).bootstrap.Modal(document.getElementById('detailsModal'));
    modal.show();
  }

  

  //filtre par poste :
  applyFilter() {
    if (!this.filterPoste.trim()) {
      this.filteredCandidatures = this.candidatures;
    } else {
      const term = this.filterPoste.trim().toLowerCase();
      this.filteredCandidatures = this.candidatures.filter(c =>
        c.posteSouhaite.toLowerCase().includes(term)
      );
    }
    this.currentPage = 1; 
  }
  

  // pagination
  get paginatedCandidatures(): Candidature[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredCandidatures.slice(startIndex, startIndex + this.itemsPerPage);
  }
  
  get totalPages(): number {
    return Math.ceil(this.candidatures.length / this.itemsPerPage);
  }
}
