import { Component } from '@angular/core';
import { VacancyStatsComponent } from '../../elements/short-cods/dashboard/vacancy-stats/vacancy-stats.component';
import { RecomendedJobsComponent } from '../../elements/short-cods/dashboard/recomended-jobs/recomended-jobs.component';
import { RouterLink } from '@angular/router';
import { UserAboutInfoComponent } from '../../elements/short-cods/dashboard/user-about-info/user-about-info.component';
import { DashboardService } from '../../services/dashboard.service';
import { OffreEmploiService } from '../../services/offre-emploi.service';

interface jobsType {
  title: string,
  company: string,
  image: string,
  follow_url: string,
  salary: string,
  location: string,
  application_type: string,
  url: string,
}
interface companiesType {
  image: string,
  title: string,
  total_vacancy: number,
  url: string,
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    VacancyStatsComponent,
    RecomendedJobsComponent,
    UserAboutInfoComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  totalOffers: number = 0;
  totalCandidatures: number = 0;
  totalUsers: number = 0;

  apps: any[] = [];

  constructor(
    private dashboardService: DashboardService ,   
    private offreEmploiService: OffreEmploiService 
  ) {}

 
  ngOnInit(): void {
    this.loadRecommendedJobs(); 
    this.loadStats();
  }
  

  processStats = { actifs: 0, termines: 0 };

  recomendedJobs: any[] = [];

  // tri des offres 
  loadRecommendedJobs(): void {
    this.offreEmploiService.getRecommendedOffres().subscribe(data => {
      this.recomendedJobs = data.map((offre: any) => ({
        title: offre.titrePoste,
        company: offre.nomEntreprise,
        image: offre.image || 'assets/images/default.png',
        follow_url: "/",
        salary: offre.salaire,
        location: `${offre.ville}, ${offre.pays}`,
        application_type: offre.typeContrat,
        candidatureCount: offre.candidatureCount,
        url: `/admin/offres/${offre.id}` 
      }));
    });
  }

  // statistique 
  
  loadStats() {
    // Appels en parallèle + regroupement des résultats
    Promise.all([
      this.dashboardService.getTotalOffers().toPromise(),
      this.dashboardService.getTotalCandidatures().toPromise(),
      this.dashboardService.getTotalUsers().toPromise(),
      this.dashboardService.getProcessStats().toPromise()
    ]).then(([offers, candidatures, users, stats]) => {
      this.totalOffers = offers ?? 0;
      this.totalCandidatures = candidatures ?? 0;
      this.totalUsers = users ?? 0;
      this.processStats = stats ?? { actifs: 0, termines: 0 };
  
      this.apps = [
        {
          total_no: this.totalOffers,
          title: "Offres Publiées",
          image: "assets/images/application_sent.svg",
          total_class: "text-success",
          image_class: "bgl-success",
          border_class: "bg-success",
          wrapper_class: "col-xl-4 col-xxl-6 col-lg-4 col-sm-6",
        },
        {
          total_no: this.totalCandidatures,
          title: "Candidatures Déposées",
          image: "assets/images/interview_schedule.svg",
          total_class: "text-secondary",
          image_class: "bgl-secondary",
          border_class: "bg-secondary",
          wrapper_class: "col-xl-4 col-xxl-6 col-lg-4 col-sm-6",
        },
        {
          total_no: this.totalUsers,
          title: "Utilisateurs Inscrits",
          image: "assets/images/profile.svg",
          total_class: "text-warning",
          image_class: "bgl-warning",
          border_class: "bg-warning",
          wrapper_class: "col-xl-4 col-xxl-12 col-lg-4 col-md-12",
        },
        {
          total_no: this.processStats.actifs + this.processStats.termines,
          title: "Processus de Recrutement",
          image: "assets/images/workflow.svg", 
          total_class: "text-info",
          image_class: "bgl-info",
          border_class: "bg-info",
          wrapper_class: "col-xl-3 col-lg-6 col-md-6 col-sm-6", 
        }
        
      ];
    });
  }
  
  
}
