import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { AccordianComponent } from '../../../components/accordian/accordian.component';
import { ExploreJobComponent } from '../../../components/explore-job/explore-job.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-helpcenter-overview',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    AccordianComponent,
    ExploreJobComponent,
    FooterComponent
  ],
  templateUrl: './helpcenter-overview.component.html',
  styleUrl: './helpcenter-overview.component.scss'
})
export class HelpcenterOverviewComponent {
  about=[
    {
      icon:'uil uil-question-circle',
      title:'FAQs',
      desc:'The phrasal sequence of the is now so that many campaign and benefit',
      link:'/helpcenter-faqs'
    },
    {
      icon:'uil uil-file-bookmark-alt',
      title:'Guides / Support',
      desc:'The phrasal sequence of the is now so that many campaign and benefit',
      link:'/helpcenter-guides'
    },
    {
      icon:'uil uil-cog',
      title:'Support Request',
      desc:'The phrasal sequence of the is now so that many campaign and benefit',
      link:'/helpcenter-support'
    },
  ]
}
