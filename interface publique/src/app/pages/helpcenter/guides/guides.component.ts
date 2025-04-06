import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { ExploreJobComponent } from '../../../components/explore-job/explore-job.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-guides',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ExploreJobComponent,
    FooterComponent
  ],
  templateUrl: './guides.component.html',
  styleUrl: './guides.component.scss'
})
export class GuidesComponent {
  guideData = [
    {
      title:'Getting started',
      data:['Deciding to purchase','List your space','Landing an experience or adventure','Top uses questions']
    },
    {
      title:'Your calendar',
      data:['Pricing & availability','Booking settings','Responding to enquiries & requests','Snoozing or deactivating your listing']
    },
    {
      title:'Your listings',
      data:['Updating your listing','Neighbourhoods','Listing photos & photography','Jobstack Plus','API-connected software']
    },
    {
      title:'How payouts work',
      data:['Getting paid','Adding payout info','Your payout status','Donations','Taxes']
    },
    {
      title:'Your reservations',
      data:['Jobstack safely','Jobstack Experiences and Adventures','Changing a reservation','Cancelling a reservation','Long-term reservations']
    },
    {
      title:'Reservation help',
      data:['Help with a reservation or guest','Guest cancellations']
    },
    {
      title:'Your account',
      data:['Your profile','Account security','Identification & verifications','Reviews','Superhost status']
    },
  ]
}
