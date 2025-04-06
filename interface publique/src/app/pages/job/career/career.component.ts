import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { ServicesComponent } from '../../../components/services/services.component';
import { MillionsOfJobComponent } from '../../../components/millions-of-job/millions-of-job.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ServicesComponent,
    MillionsOfJobComponent,
    FooterComponent
  ],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {
  
  jobOpeningData = [
    {
      name:'Frontend Developer',
      title:'Total Openings: 1'
    },
    {
      name:'Business Development Manager',
      title:'Total Openings: 2'
    },
    {
      name:'Backend Developer',
      title:'Total Openings: 4'
    },
  ]
}
