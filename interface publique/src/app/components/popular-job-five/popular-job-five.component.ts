import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import JobData from '../../data/job.json'

@Component({
  selector: 'app-popular-job-five',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './popular-job-five.component.html',
  styleUrl: './popular-job-five.component.scss'
})
export class PopularJobFiveComponent {
  jobData = JobData;
}
