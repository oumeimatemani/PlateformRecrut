import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { AccordianComponent } from '../../../components/accordian/accordian.component';
import { ExploreJobComponent } from '../../../components/explore-job/explore-job.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-helpcenter-faqs',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    AccordianComponent,
    ExploreJobComponent,
    FooterComponent
  ],
  templateUrl: './helpcenter-faqs.component.html',
  styleUrl: './helpcenter-faqs.component.scss'
})
export class HelpcenterFaqsComponent {

}
