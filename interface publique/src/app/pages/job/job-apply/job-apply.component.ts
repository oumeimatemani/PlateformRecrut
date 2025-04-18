import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { CandidatureService } from '../../../_services/candidature.service';
import { TokenStorageService } from '../../../_services/token-storage.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-job-apply',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,
    FormsModule
  ],
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.scss']
})
export class JobApplyComponent {
  selectedFile: File | null = null;
  form: any = {};

  postesDisponibles: string[] = [];


  constructor(
    private candidatureService: CandidatureService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // Récupérer le titre du poste depuis les queryParams
    this.route.queryParams.subscribe(params => {
      const poste = params['poste'];
      if (poste) {
        this.form.posteSouhaite = poste;
      }
    });
    this.chargerPostes();

  }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(form: any) {
    if (!form.posteSouhaite || !form.nomComplet || !form.email || !form.telephone || !form.lieuResidence || !form.lettreMotivation || !this.selectedFile) {
      Swal.fire({
        icon: 'warning',
        title: 'Champs manquants',
        text: 'Veuillez remplir tous les champs et ajouter un CV.'
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      Swal.fire({
        icon: 'error',
        title: 'E-mail invalide',
        text: 'Veuillez entrer une adresse e-mail valide.'
      });
      return;
    }

    const formData = new FormData();
    formData.append('posteSouhaite', form.posteSouhaite);
    formData.append('nomComplet', form.nomComplet);
    formData.append('email', form.email);
    formData.append('telephone', form.telephone);
    formData.append('lieuResidence', form.lieuResidence);
    formData.append('lettreMotivation', form.lettreMotivation);
    formData.append('cv', this.selectedFile);

    this.candidatureService.postCandidature(formData).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Candidature envoyée avec succès !',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/job-list-four']);
        });
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Une erreur est survenue lors de l\'envoi de la candidature.'
        });
        console.error(err);
      }
    });
  }



  chargerPostes(): void {
    this.http.get<any[]>('http://localhost:8080/api/offres').subscribe(data => {
      this.postesDisponibles = data.map(offre => offre.titrePoste);
    });
  }
}
