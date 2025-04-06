import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import JobData from '../../data/job.json'

@Component({
  selector: 'app-popular-job-four',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './popular-job-four.component.html',
  styleUrl: './popular-job-four.component.scss'
})
export class PopularJobFourComponent {
  jobData = JobData;
}
