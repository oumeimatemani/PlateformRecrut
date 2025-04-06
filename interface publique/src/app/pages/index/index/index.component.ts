import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { TrendingServicesComponent } from '../../../components/trending-services/trending-services.component';
import { PopularJobTwoComponent } from '../../../components/popular-job-two/popular-job-two.component';
import { CounterComponent } from '../../../components/counter/counter.component';
import { BestCompaniesComponent } from '../../../components/best-companies/best-companies.component';
import { QueAnsComponent } from '../../../components/que-ans/que-ans.component';
import { ExploreJobComponent } from '../../../components/explore-job/explore-job.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
     RouterLink,
     NavbarComponent,
     FooterComponent,
     TrendingServicesComponent,
     PopularJobTwoComponent,
     CounterComponent,
     BestCompaniesComponent,
     QueAnsComponent,
     ExploreJobComponent,
     FooterComponent
    ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
