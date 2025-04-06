import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { ExploreJobComponent } from '../../../components/explore-job/explore-job.component';
import { FooterComponent } from '../../../components/footer/footer.component';

import JobData from '../../../data/job.json'

@Component({
  selector: 'app-job-detail-two',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ExploreJobComponent,
    FooterComponent
  ],
  templateUrl: './job-detail-two.component.html',
  styleUrl: './job-detail-two.component.scss'
})
export class JobDetailTwoComponent {
  jobData = JobData;

  jobId:any ;
  data:any ;

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.jobId = this.route.snapshot.params['id'];
    this.data = this.jobData.find(x => x.id == this.jobId);
  }
}
