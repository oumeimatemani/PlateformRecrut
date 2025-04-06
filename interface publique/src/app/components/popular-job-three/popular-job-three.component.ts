import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import JobData from '../../data/job.json'

@Component({
  selector: 'app-popular-job-three',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './popular-job-three.component.html',
  styleUrl: './popular-job-three.component.scss'
})
export class PopularJobThreeComponent {
jobData = JobData
}
