import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { ExploreJobComponent } from '../../../components/explore-job/explore-job.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import JobData from '../../../data/job.json'
@Component({
  selector: 'app-job-detail-one',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ExploreJobComponent,
    FooterComponent
  ],
  templateUrl: './job-detail-one.component.html',
  styleUrl: './job-detail-one.component.scss'
})
export class JobDetailOneComponent {
  jobData = JobData;

  jobId:any ;
  data:any ;

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.jobId = this.route.snapshot.params['id'];
   // this.data = this.jobData.find(x => x.id == this.jobId);
  }

}
