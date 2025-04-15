import { Component, OnInit } from "@angular/core";
import { CandidatureService } from "../../../../services/candidature.service";
import { PreselectionFormComponent } from "../preselection-form/preselection-form.component";
import { Candidature } from "../../../../models/candidature";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-candidature-list',
  standalone: true,
  imports: [CommonModule, PreselectionFormComponent,FormsModule],
  templateUrl: './candidature-list.component.html',
  styleUrl: './candidature-list.component.css'
})

export class CandidatureListComponent implements OnInit {
  candidatures: Candidature[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 8;

  filterPoste: string = '';
  filteredCandidatures: Candidature[] = [];


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
    if (confirm('Supprimer cette candidature ?')) {
      this.candidatureService.deleteCandidature(id).subscribe(() => {
        this.fetchCandidatures();
      });
    }
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
    this.currentPage = 1; // reset to first page
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
