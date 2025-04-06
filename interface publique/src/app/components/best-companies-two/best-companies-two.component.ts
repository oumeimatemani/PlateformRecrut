import { Component } from '@angular/core';
import JobData from '../../data/job.json'
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-best-companies-two',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './best-companies-two.component.html',
  styleUrl: './best-companies-two.component.scss'
})
export class BestCompaniesTwoComponent {
jobData = JobData
}
