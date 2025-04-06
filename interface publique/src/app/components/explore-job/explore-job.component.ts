import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-explore-job',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './explore-job.component.html',
  styleUrl: './explore-job.component.scss'
})
export class ExploreJobComponent {

}
