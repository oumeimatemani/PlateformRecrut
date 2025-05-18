import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { EntretienService } from '../../../services/entretien.service';
import { CandidatureService } from '../../../services/candidature.service';
import { TestTechniqueService } from '../../../services/test-technique.service';
import { Candidature } from '../../../models/candidature';
import { TestTechnique } from '../../../models/TestTechnique';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-entretiens',
  standalone: true,
  imports: [CommonModule, FormsModule], 

  templateUrl: './entretiens.component.html',
  styleUrl: './entretiens.component.css'
})
export class EntretiensComponent implements OnInit {
  candidatures: Candidature[] = [];
  tests: TestTechnique[] = [];
  selectedTests: { [id: number]: string } = {};
  selectedDates: { [id: number]: string } = {};

  constructor(
    private entretienService: EntretienService,
    private candidatureService: CandidatureService,
    private testService: TestTechniqueService
  ) {}

  ngOnInit(): void {
    this.candidatureService.getCandidaturesPreselectionnees().subscribe(data => this.candidatures = data);
    this.testService.getAllTests().subscribe(data => this.tests = data);
  }

  planifier(candidature: Candidature) {
    const lienTest = this.selectedTests[candidature.id];
    const dateEntretien = this.selectedDates[candidature.id];

    if (!lienTest || !dateEntretien) {
      Swal.fire('Erreur', 'Veuillez sélectionner un test et une date.', 'warning');
      return;
    }

    const payload = {
      candidatureId: candidature.id.toString(),
      lienTest,
      dateEntretien
    };

    this.entretienService.planifierEntretien(payload).subscribe({
      next: () => Swal.fire('Succès', 'Entretien planifié et email envoyé !', 'success'),
      error: () => Swal.fire('Erreur', 'Une erreur est survenue', 'error')
    });
  }
}