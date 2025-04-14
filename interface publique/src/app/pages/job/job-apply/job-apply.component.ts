import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { CandidatureService } from '../../../_services/candidature.service';
import { TokenStorageService } from '../../../_services/token-storage.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-job-apply',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,
    FormsModule,
  ],
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.scss']
})
export class JobApplyComponent {
  selectedFile: File | null = null;
  form: any = {};
  

  constructor(
    private candidatureService: CandidatureService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(form: any) {
    const formData = new FormData();
    formData.append('posteSouhaite', form.posteSouhaite);
    formData.append('nomComplet', form.nomComplet);
    formData.append('email', form.email);
    formData.append('telephone', form.telephone);
    formData.append('lieuResidence', form.lieuResidence);
    formData.append('lettreMotivation', form.lettreMotivation);
    if (this.selectedFile) {
      formData.append('cv', this.selectedFile);
    }

    console.log('Token actuel (avant envoi) :', this.tokenStorage.getToken()); 

    this.candidatureService.postCandidature(formData).subscribe({
      next: () => {
        alert('Candidature envoyée avec succès !');
        this.router.navigate(['/job-list-four']); 
      },
      error: (err) => {
        alert("Erreur lors de l'envoi de la candidature.");
        console.error(err);
      }
    });
  }
}
