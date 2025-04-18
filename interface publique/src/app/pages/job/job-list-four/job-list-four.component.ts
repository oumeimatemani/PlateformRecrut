import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { JobSidebarComponent } from '../../../components/job-sidebar/job-sidebar.component';
import { ServicesComponent } from '../../../components/services/services.component';
import { ExploreJobComponent } from '../../../components/explore-job/explore-job.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Component, OnInit } from '@angular/core';
import { OffreEmploiService } from '../../../_services/offre-emploi.service';
import { OffreEmploi } from '../../../models/offre-emploi.model';

@Component({
  selector: 'app-job-list-four',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    JobSidebarComponent,
    ServicesComponent,
    ExploreJobComponent,
    FooterComponent,
    NgxPaginationModule  
  ],
  templateUrl: './job-list-four.component.html',
  styleUrl: './job-list-four.component.scss'
})

export class JobListFourComponent implements OnInit {
 

  currentPage: number = 1;
  itemsPerPage: number = 4;

  filtreActif: any = {};

  jobData: OffreEmploi[] = [];
  paginatedJobs: OffreEmploi[] = [];

  totalPages: number = 1;

  constructor(private http: HttpClient, private offreService: OffreEmploiService) {}

  ngOnInit(): void {
    this.loadAllJobs();
  }

  // Charger tout au début
  loadAllJobs(): void {
    this.offreService.getAllOffres().subscribe(data => {
      this.jobData = data;
      this.updatePagination();
    });
  }

  // filtrage
  onFiltreChange(filtre: any) {
    this.offreService.filtrerOffres(filtre).subscribe(data => {
      this.jobData = data;
      this.currentPage = 1;
      this.updatePagination();
    });
  }

  // pagination
  updatePagination(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedJobs = this.jobData.slice(start, end);
    this.totalPages = Math.ceil(this.jobData.length / this.itemsPerPage);
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.updatePagination();
  }
}


 

  
