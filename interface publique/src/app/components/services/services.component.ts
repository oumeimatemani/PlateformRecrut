import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  servicesData = [
    {
      icon:'uil uil-phone',
      title:'24/7 IT Support & Maintenance',
      desc:'Many desktop publishing now use and a search for job.'
    },
    {
      icon:'uil uil-atom',
      title:'Scalable Cloud Solutions',
      desc:'Many desktop publishing now use and a search for job.'
    },
    {
      icon:'uil uil-user-arrows',
      title:'Fast & Secure Software Development',
      desc:'Many desktop publishing now use and a search for job.'
    },
    {
      icon:'uil uil-hourglass',
      title:'Automate & Optimize Workflows',
      desc:'Many desktop publishing now use and a search for job.'
    },
  ]
}
