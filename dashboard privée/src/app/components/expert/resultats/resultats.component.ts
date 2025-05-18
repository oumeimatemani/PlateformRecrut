import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ResultatEvaluation } from '../../../models/resultat-evaluation';
import { ResultatService } from '../../../services/resultat.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resultats',
  standalone: true,
  imports: [CommonModule,FormsModule],   
  providers: [DatePipe],   
  templateUrl: './resultats.component.html',
  styleUrl: './resultats.component.css'
})
export class ResultatsComponent implements OnInit {
  resultats: ResultatEvaluation[] = [];
  filtre: string = '';

  constructor(private resultatService: ResultatService) {}


  ngOnInit(): void {
    this.resultatService.getAll().subscribe(data => {
      this.resultats = data.map((r: any) => ({
        nomCandidat: r.candidatNom,
        email: r.email,
        testTitre: r.test?.titre || '', 
        score: r.score,
        statut: r.statut,
        dateEvaluation: r.datePassage
      }));
    });
  }
  

  //filtre 
  get resultatsFiltres(): ResultatEvaluation[] {
    return this.resultats.filter(r =>
      r.nomCandidat?.toLowerCase().includes(this.filtre.toLowerCase()) ||
      r.email?.toLowerCase().includes(this.filtre.toLowerCase())
    );
  }
  
}