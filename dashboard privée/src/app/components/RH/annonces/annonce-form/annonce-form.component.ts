import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormsModule,ReactiveFormsModule , FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OffreEmploiService } from '../../../../services/offre-emploi.service';
import { OffreEmploi } from '../../../../models/OffreEmploi';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-annonce-form',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule ],
  templateUrl: './annonce-form.component.html',
  styleUrl: './annonce-form.component.css'
})
export class AnnonceFormComponent implements OnInit {
  offreForm!: FormGroup;
  isEditMode = false;
  offreId!: number;

  constructor(
    private fb: FormBuilder,
    private offreService: OffreEmploiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();

    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.isEditMode = true;
        this.offreId = +idParam;
        this.offreService.getOffreById(this.offreId).subscribe(offre => {
          this.offreForm.patchValue(offre);
          offre.competences.forEach(c => {
            this.competences.push(this.fb.control(c));
          });
        });
      }
    });
  }

  initForm() {
    this.offreForm = this.fb.group({
      titrePoste: ['', Validators.required],
      nomEntreprise: ['', Validators.required],
      typeContrat: ['', Validators.required],
      pays: [''],
      ville: [''],
      nombreCandidats: [''],
      nombrePostes: [''],
      salaire: [''],
      duree: [''],
      tauxHoraire: [''],
      descriptionCourte: [''],
      descriptionLongue: [''],
      datePub: [''],
      dateExpiration: [''],
      image: [''],
      badge: [false],
      competences: this.fb.array([])
    });
  }

  get competences(): FormArray<FormControl> {
    return this.offreForm.get('competences') as FormArray<FormControl>;
  }
  

  addCompetence() {
    this.competences.push(this.fb.control(''));
  }

  removeCompetence(index: number) {
    this.competences.removeAt(index);
  }


  onSubmit() {
    console.log('Données du formulaire :', this.offreForm.value);
  
    if (this.isEditMode) {
      this.offreService.updateOffre(this.offreId, this.offreForm.value).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Offre modifiée avec succès !',
            showConfirmButton: false,
            timer: 2000
          });
          this.router.navigate(['/rh/annonces']);
        },
        error: (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Une erreur est survenue pendant la modification.',
          });
          console.error('Erreur lors de la modification :', error);
        }
      });
  
    } else {
      this.offreService.createOffre(this.offreForm.value).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Offre ajoutée avec succès !',
            showConfirmButton: false,
            timer: 2000
          });
          this.router.navigate(['/rh/annonces']);
        },
        error: (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Une erreur est survenue pendant la création.',
          });
          console.error('Erreur lors de la création :', error);
        }
      });
    }
  }
  
  
  


}