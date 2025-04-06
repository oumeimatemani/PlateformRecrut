import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {tns} from 'tiny-slider'

@Component({
  selector: 'app-trending-services',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: './trending-services.component.html',
  styleUrl: './trending-services.component.scss'
})
export class TrendingServicesComponent {
  slider:any;

  ngAfterViewInit(): void {
    this.slider = tns({
      container: '.tiny-five-item',
      controls: true,
      mouseDrag: true,
      loop: true,
      rewind: true,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 3000,
      navPosition: "bottom",
      controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
      nav: false,
      speed: 400,
      gutter: 10,
      responsive: {
        1025: { items: 4 },  // Afficher 4 images au lieu de 5
        992: { items: 3 },
        767: { items: 2 },
        425: { items: 1 },
    },
  });
  }

  servicesData = [
    {
      image:'assets/images/work/cloud-computing.jpg',
      title:'Cloud Computing & DevOps'
    },
    {
      image:'assets/images/work/cybersecurity.jpg',
      title:'Cybersecurity Solutions'
    },
    {
      image:'assets/images/work/software-development.jpg',
      title:'Custom Software Development'
    },
    {
      image:'assets/images/work/data-analytics.jpg',
      title:'Data Analytics & AI'
    },
    {
      image:'assets/images/work/it-infrastructure.jpg',
      title:'IT Infrastructure & Networking'
    },
    {
      image:'assets/images/work/enterprise-consulting.jpg',
      title:'Enterprise IT Consulting'
    },
  ]
}
