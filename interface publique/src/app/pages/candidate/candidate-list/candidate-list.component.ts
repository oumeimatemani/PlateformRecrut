import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { ExploreJobComponent } from '../../../components/explore-job/explore-job.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import Candidate from '../../../data/candidate.json'
@Component({
  selector: 'app-candidate-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ExploreJobComponent,
    FooterComponent
  ],
  templateUrl: './candidate-list.component.html',
  styleUrl: './candidate-list.component.scss'
})
export class CandidateListComponent {
 candidate = Candidate
}
