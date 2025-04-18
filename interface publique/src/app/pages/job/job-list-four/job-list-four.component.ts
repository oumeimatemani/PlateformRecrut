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
  jobData: any[] = [];
 
  paginatedJobs: any[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 4;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/api/offres').subscribe(data => {
      this.jobData = data;
      this.updatePagination();
    });
  }

  updatePagination() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedJobs = this.jobData.slice(start, end);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  get totalPages(): number {
    return Math.ceil(this.jobData.length / this.itemsPerPage);
  }

  //filtre
  onFiltreChange(filtres: any) {
    const params = new URLSearchParams();
    if (filtres.ville) params.set('ville', filtres.ville);
    if (filtres.typeContrat) params.set('typeContrat', filtres.typeContrat);
    if (filtres.competence) params.set('competence', filtres.competence);
    if (filtres.search) params.set('search', filtres.search); 
    params.set('minSalaire', filtres.minSalaire);
    params.set('maxSalaire', filtres.maxSalaire);
  
    this.http.get<any[]>(`http://localhost:8080/api/offres?${params}`).subscribe(data => {
      this.jobData = data;
      this.currentPage = 1; // reset to page 1
      this.updatePagination();
    });
  }
  
  

  
}
