import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OffreEmploiService } from '../../_services/offre-emploi.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-job-sidebar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './job-sidebar.component.html',
  styleUrl: './job-sidebar.component.scss'
})
export class JobSidebarComponent implements OnInit {
  @Output() filtreChange = new EventEmitter<any>();

  villes: string[] = [];
  typesContrat: string[] = [];
  competences: string[] = [];

  selectedVille = '';
  selectedContrat = '';
  selectedCompetence = '';
  salaireMin = 0;
  salaireMax = 10000;
  searchTerm: string = '';

  constructor(private offreService: OffreEmploiService) {}

  ngOnInit(): void {
    this.offreService.getFiltreData().subscribe(data => {
      this.villes = data.villes;
      this.typesContrat = data.typesContrat;
      this.competences = data.competences;
    });
  }

  appliquerFiltres() {
    this.filtreChange.emit({
      ville: this.selectedVille,
      typeContrat: this.selectedContrat,
      competence: this.selectedCompetence,
      minSalaire: this.salaireMin,
      maxSalaire: this.salaireMax,
      search: this.searchTerm
    });
  }
  
}