import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './elements/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SearchJobComponent } from './pages/search-job/search-job.component';
import { ApplicationComponent } from './pages/application/application.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password.component';
import { Error404Component } from './pages/error/error404/error404.component';
import { WorkflowMonitoringComponent } from './components/RH/workflow-monitoring/workflow-monitoring.component';
import { CandidatureListComponent } from './components/RH/candidatures/candidature-list/candidature-list.component'; 
import { CandidatureDetailsComponent } from './components/RH/candidatures/candidature-details/candidature-details.component';
import { UserListCandidatsComponent } from './components/admin/users/user-list-candidats/user-list-candidats.component';
import { UserListAdminsComponent } from './components/admin/users/user-list-admins/user-list-admins.component';
import { AnnonceListComponent } from './components/RH/annonces/annonce-list/annonce-list.component';
import { AnnonceFormComponent } from './components/RH/annonces/annonce-form/annonce-form.component';
import { ProcessusDetailsComponent } from './components/RH/workflow-monitoring/processus-details/processus-details.component';
import { TestsEnLigneComponent } from './components/expert/tests-en-ligne/tests-en-ligne.component';
import { ResultatsComponent } from './components/expert/resultats/resultats.component';
import { EntretiensComponent } from './components/expert/entretiens/entretiens.component';
import { IntegrationListComponent } from './components/RH/integration/integration-list/integration-list.component';
import { ProfilsPreslectionnesComponent } from './components/manager/profils-preslectionnes/profils-preslectionnes.component';
import { ValidationComponent } from './components/manager/validation/validation.component';
import { AffectationComponent } from './components/manager/affectation/affectation.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // ADMIN ROUTES
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'index', component: DashboardComponent },
      { path: 'index-2', component: DashboardComponent },
      { path: 'search-job', component: SearchJobComponent },
      { path: 'application', component: ApplicationComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'companies', component: CompaniesComponent },

      {
        path: 'candidats',
        component: UserListCandidatsComponent
      },
      {
        path: 'admins',
        component: UserListAdminsComponent
      }
      
    ]
  },

  //ROUTE POUR RH 
  { path: 'rh', component: AdminLayoutComponent, children: [
      { path: 'candidatures',component: CandidatureListComponent},
      { path: 'candidatures/details/:id', component: CandidatureDetailsComponent },
      { path: 'workflow-monitoring', component: WorkflowMonitoringComponent },
      { path: 'processus/:id', component: ProcessusDetailsComponent },
      { path: 'annonces', component: AnnonceListComponent },
      { path: 'annonce/create', component: AnnonceFormComponent },
      { path: 'annonce/edit/:id', component: AnnonceFormComponent },
      { path: 'integration', component: IntegrationListComponent },

  ]},


    //ROUTE POUR EXPERT TECHNIQUE
    { path: 'expert', component: AdminLayoutComponent, children: [
      { path: 'tests',component: TestsEnLigneComponent},
      { path: 'entretiens', component: EntretiensComponent },
      { path: 'resultats', component: ResultatsComponent }
    ]},

    //ROUTE POUR ManAGER
    { path: 'manager', component: AdminLayoutComponent, children: [
      { path: 'profils-preslectionnes',component: ProfilsPreslectionnesComponent},
      { path: 'validation', component: ValidationComponent },
      { path: 'affectation', component: AffectationComponent }
    ]},
  // AUTH
  { path: 'page-register', component: RegisterComponent },
  { path: 'page-login', component: LoginComponent },
  { path: 'page-forgot-password', component: ForgotPasswordComponent },
  { path: 'login', component: LoginComponent },

  // 404 - catch all
  { path: '**', component: Error404Component }
];
