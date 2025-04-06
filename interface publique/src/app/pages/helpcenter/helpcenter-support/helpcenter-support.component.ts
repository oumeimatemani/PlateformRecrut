import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../../components/footer/footer.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';

@Component({
  selector: 'app-helpcenter-support',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './helpcenter-support.component.html',
  styleUrl: './helpcenter-support.component.scss'
})
export class HelpcenterSupportComponent {
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
