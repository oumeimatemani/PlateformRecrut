import { Component, Input, OnInit , ViewChild, ElementRef} from '@angular/core';
import { TestTechniqueService } from '../../../services/test-technique.service';
import { TestTechnique } from '../../../models/TestTechnique';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tests-en-ligne',
  standalone: true,
  imports: [CommonModule,FormsModule] ,
  templateUrl: './tests-en-ligne.component.html',
  styleUrl: './tests-en-ligne.component.css'
})
export class TestsEnLigneComponent implements OnInit {

  tests: TestTechnique[] = [];
  currentPage = 1;
  itemsPerPage = 3;

  formVisible = false;

  testActuel: TestTechnique = this.getNouveauTest();

  constructor(private testService: TestTechniqueService , private sanitizer: DomSanitizer ) {}

  @ViewChild('formulaireTest') formulaireTest!: ElementRef;

  ouvrirFormulaire(test?: TestTechnique): void {
    this.formVisible = true;
    this.testActuel = test ? { ...test } : this.getNouveauTest();

    // attend que le formulaire soit affiché dans le DOM
    setTimeout(() => {
      if (this.formulaireTest) {
        this.formulaireTest.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 10); 
  }

  
  annuler() {
    this.formVisible = false;
    this.testActuel = this.getNouveauTest();
  }
  
  soumettreFormulaire() {
    if (this.testActuel.id) {
      // MODIFIER
      this.testService.update(this.testActuel.id, this.testActuel).subscribe(() => {
        this.loadTests();
        this.annuler();
        Swal.fire({
          icon: 'success',
          title: 'Test modifié',
          text: 'Le test a été modifié avec succès !',
          confirmButtonColor: '#c13434'
        });
      });
    } else {
      // AJOUTER
      this.testService.create(this.testActuel).subscribe(() => {
        this.loadTests();
        this.annuler();
        Swal.fire({
          icon: 'success',
          title: 'Test ajouté',
          text: 'Le test a été ajouté avec succès !',
          confirmButtonColor: '#c13434'
        });
      });
    }
  }
  
  
  getNouveauTest(): TestTechnique {
    return {
      id: 0,
      titre: '',
      description: '',
      niveau: '',
      dureeMinutes: 0,
      lienTest: ''
    };
  }

  getSafeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  

  ngOnInit(): void {
    this.loadTests();
  }

  loadTests(): void {
    this.testService. getAllTests().subscribe({
      next: (data) => {
        console.log('Tests récupérés:', data); 
        this.tests = data;
      },
      error: (err) => console.error('Erreur lors du chargement des tests', err)
    });
  }
  

  deleteTest(id: number): void {
    Swal.fire({
      title: 'Confirmation',
      text: 'Voulez-vous vraiment supprimer ce test ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#c13434',
      cancelButtonColor: '#d3d3d3',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.testService.delete(id).subscribe(() => {
          this.loadTests(); // refresh
          Swal.fire({
            icon: 'success',
            title: 'Supprimé',
            text: 'Le test a été supprimé avec succès.',
            confirmButtonColor: '#c13434'
          });
        });
      }
    });
  }
  

  
  // pagination
  get paginatedTests(): TestTechnique[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.tests.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.tests.length / this.itemsPerPage);
  }

}
