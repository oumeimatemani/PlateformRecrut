import { Component } from '@angular/core';
import { VacancyStatsComponent } from '../../elements/short-cods/dashboard/vacancy-stats/vacancy-stats.component';
import { RecomendedJobsComponent } from '../../elements/short-cods/dashboard/recomended-jobs/recomended-jobs.component';
import { RouterLink } from '@angular/router';
import { UserAboutInfoComponent } from '../../elements/short-cods/dashboard/user-about-info/user-about-info.component';

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

  apps = [
    {
      total_no: "43",
      title: "Application Sent",
      image: "assets/images/application_sent.svg",
      total_class: "text-success",
      image_class: "bgl-success",
      border_class: "bg-success",
      wrapper_class: "col-xl-4 col-xxl-6 col-lg-4 col-sm-6",
    },
    {
      total_no: "27",
      title: "Interviews Schedule",
      image: "assets/images/interview_schedule.svg",
      total_class: "text-secondary",
      image_class: "bgl-secondary",
      border_class: "bg-secondary",
      wrapper_class: "col-xl-4 col-xxl-6 col-lg-4 col-sm-6",
    },
    {
      total_no: "52k",
      title: "Profile Viewed",
      image: "assets/images/profile.svg",
      total_class: "text-warning",
      image_class: "bgl-warning",
      border_class: "bg-warning",
      wrapper_class: "col-xl-4 col-xxl-12 col-lg-4 col-md-12",
    },
  ];

  recomendedJobs: jobsType[] = [
    {
      title: "Intern UX Designer",
      company: "Maximoz Team",
      image: "assets/images/companylogo/1.svg",
      follow_url: "/admin/companies",
      salary: "$14,000 - $25,000",
      location: "London, England",
      application_type: "FULTIME",
      url: "/admin/search-job",
    },
    {
      title: "Senior UX Designer",
      company: "Inacyx Studios",
      image: "assets/images/companylogo/2.svg",
      follow_url: "/admin/companies",
      salary: "$21,000 - $25,000",
      location: "Manchester, England",
      application_type: "FREELANCE, PART TIME",
      url: "/admin/search-job",
    },
    {
      title: "Freelance UI Designer",
      company: "Naonatu Team",
      image: "assets/images/companylogo/3.svg",
      follow_url: "/admin/companies",
      salary: "$21,000 - $25,000",
      location: "Manchester, England",
      application_type: "FREELANCE, PART TIME",
      url: "/admin/search-job",
    },
    {
      title: "Senior UX Designer",
      company: "Inacyx Studios",
      image: "assets/images/companylogo/4.svg",
      follow_url: "/admin/companies",
      salary: "$21,000 - $25,000",
      location: "Manchester, England",
      application_type: "FREELANCE, PART TIME",
      url: "/admin/search-job",
    },
  ];

  featuredCompanies: companiesType[] = [
    {
      image: "assets/images/companylogo/medium/1.svg",
      title: "Herman-Carter",
      total_vacancy: 21,
      url: "/admin/application",
    },
    {
      image: "assets/images/companylogo/medium/2.svg",
      title: "Funk Inc",
      total_vacancy: 17,
      url: "/admin/application",
    },
    {
      image: "assets/images/companylogo/medium/3.svg",
      title: "Simonis Ltd",
      total_vacancy: 31,
      url: "/admin/application",
    },
    {
      image: "assets/images/companylogo/medium/4.svg",
      title: "Mosciski Inc",
      total_vacancy: 7,
      url: "/admin/application",
    },
    {
      image: "assets/images/companylogo/medium/5.svg",
      title: "Williamson Inc",
      total_vacancy: 4,
      url: "/admin/application",
    },
    {
      image: "assets/images/companylogo/medium/6.svg",
      title: "Donnelly Ltd",
      total_vacancy: 4,
      url: "/admin/application",
    },
    {
      image: "assets/images/companylogo/medium/7.svg",
      title: "Bosco-Reilly",
      total_vacancy: 21,
      url: "/admin/application",
    },
    {
      image: "assets/images/companylogo/medium/8.svg",
      title: "Kerluke Inc",
      total_vacancy: 18,
      url: "/admin/application",
    },
    {
      image: "assets/images/companylogo/medium/9.svg",
      title: "Ferry Inc",
      total_vacancy: 12,
      url: "/admin/application",
    },
    {
      image: "assets/images/companylogo/medium/10.svg",
      title: "Carroll-Walker",
      total_vacancy: 5,
      url: "/admin/application",
    },
    {
      image: "assets/images/companylogo/medium/11.svg",
      title: "Russel Ltd",
      total_vacancy: 53,
      url: "/admin/application",
    },
    {
      image: "assets/images/companylogo/medium/12.svg",
      title: "Murray-Marvin",
      total_vacancy: 4,
      url: "/admin/application",
    },
  ];
}
