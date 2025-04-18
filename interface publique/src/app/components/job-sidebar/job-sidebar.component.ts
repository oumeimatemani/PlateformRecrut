import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-sidebar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './job-sidebar.component.html',
  styleUrl: './job-sidebar.component.scss'
})
export class JobSidebarComponent implements OnInit {
  @Output() filtreChange = new EventEmitter<any>();

  filtre = {
    titre: '',
    ville: '',
    competence: '',
    contrats: {
      CDI: false,
      CDD: false,
      STAGE: false
    }
  };

  villesDisponibles = ['Tunis', 'Ariana', 'Sousse','Nabeul', 'Bizerte', 'Sfax', 'Kairouan', 'Monastir', 'Gabes', 'Medenine'];

  ngOnInit(): void {}

  appliquerFiltres() {
    this.filtreChange.emit(this.filtre);
  }


  reinitialiserFiltres() {
    this.filtre = {
      titre: '',
      ville: '',
      competence: '',
      contrats: { CDI: false, CDD: false, STAGE: false }
    };
    this.appliquerFiltres();
  }

  
}