import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { JobSidebarComponent } from '../../../components/job-sidebar/job-sidebar.component';
import { ServicesComponent } from '../../../components/services/services.component';
import { ExploreJobComponent } from '../../../components/explore-job/explore-job.component';
import { FooterComponent } from '../../../components/footer/footer.component';

import JobData from '../../../data/job.json'

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
    FooterComponent
  ],
  templateUrl: './job-list-four.component.html',
  styleUrl: './job-list-four.component.scss'
})
export class JobListFourComponent {
  jobData = JobData;
}
