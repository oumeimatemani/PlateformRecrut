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

import { UserListComponent } from './components/admin/users/user-list/user-list.component';
import { WorkflowMonitoringComponent } from './components/admin/workflow-monitoring/workflow-monitoring.component';
import { CandidatureListComponent } from './components/RH/candidatures/candidature-list/candidature-list.component'; // ✅ Import RH

export const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },

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
      { path: 'users', component: UserListComponent },
      {
        path: 'users/edit/:id',
        loadComponent: () => import('./components/admin/users/user-form/user-form.component').then(m => m.UserFormComponent)
      },
      { path: 'workflow-monitoring', component: WorkflowMonitoringComponent },
    ]
  },

  //ROUTE POUR RH - CANDIDATURES
  { path: 'rh', component: AdminLayoutComponent, children: [
      { path: 'candidatures',component: CandidatureListComponent},
  ]},

  // AUTH
  { path: 'page-register', component: RegisterComponent },
  { path: 'page-login', component: LoginComponent },
  { path: 'page-forgot-password', component: ForgotPasswordComponent },
  { path: 'login', component: LoginComponent },

  // 404 - catch all
  { path: '**', component: Error404Component }
];
