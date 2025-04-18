import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Candidature } from '../../../../models/candidature';
import { CandidatureService } from '../../../../services/candidature.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidature-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './candidature-details.component.html',
  styleUrl: './candidature-details.component.css'
})
export class CandidatureDetailsComponent implements OnInit {

  candidature!: Candidature;

  constructor(
    private route: ActivatedRoute,
    private candidatureService: CandidatureService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID reçu depuis URL:', id);
  
    if (id) {
      this.candidatureService.getCandidatureById(+id).subscribe(data => {
        console.log('Données reçues de l’API :', data);
        this.candidature = data;
      });
    }
  }

  downloadFile(): void {
    const filename = this.candidature.cvFileName; // ne contient que le nom
  
    this.candidatureService.downloadCV(filename).subscribe({
      next: (blob) => {
        const fileURL = window.URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
        const a = document.createElement('a');
        a.href = fileURL;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(fileURL);
      },
      error: (err) => {
        console.error("Erreur lors du téléchargement du fichier:", err);
      }
    });
  }
  
  
  
}