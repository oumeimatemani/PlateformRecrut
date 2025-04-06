import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { AccordianComponent } from '../../../components/accordian/accordian.component';
import { ExploreJobComponent } from '../../../components/explore-job/explore-job.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-job-categories',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    AccordianComponent,
    ExploreJobComponent,
    FooterComponent
  ],
  templateUrl: './job-categories.component.html',
  styleUrl: './job-categories.component.scss'
})
export class JobCategoriesComponent {
  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
  
  categoryData = [
    {
      icon:'uil uil-gitlab',
      title:'Business',
      title2:'Development',
      job:'74 Jobs'
    },
    {
      icon:'uil uil-book-open',
      title:'Marketing &',
      title2:'Communication',
      job:'20 Jobs'
    },
    {
      icon:'uil uil-chart-pie-alt',
      title:'Project',
      title2:'Management',
      job:'35 Jobs'
    },
    {
      icon:'uil uil-feedback',
      title:'Customer',
      title2:'Service',
      job:'46 Jobs'
    },
    {
      icon:'uil uil-presentation-line',
      title:'Software',
      title2:'Engineering',
      job:'60 Jobs'
    },
    {
      icon:'uil uil-gitlab',
      title:'Human Resource',
      title2:'HR',
      job:'74 Jobs'
    },
    {
      icon:'uil uil-book-open',
      title:'It &',
      title2:'Networking',
      job:'20 Jobs'
    },
    {
      icon:'uil uil-chart-pie-alt',
      title:'Sales &',
      title2:'Marketing',
      job:'35 Jobs'
    },
    {
      icon:'uil uil-feedback',
      title:'Project',
      title2:'Manager',
      job:'46 Jobs'
    },
    {
      icon:'uil uil-presentation-line',
      title:'Data',
      title2:'Science',
      job:'60 Jobs'
    },
  ]
}
