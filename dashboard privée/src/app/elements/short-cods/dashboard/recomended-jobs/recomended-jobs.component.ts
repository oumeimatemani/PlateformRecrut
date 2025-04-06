
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-recomended-jobs',
  standalone: true,
  imports: [
    RouterLink,
    CarouselModule
  ],
  templateUrl: './recomended-jobs.component.html',
  styleUrl: './recomended-jobs.component.css'
})
export class RecomendedJobsComponent {

  @Input() data:any;

  customOptions: OwlOptions = {
    loop:true,
    autoplay:true,
    margin:20,
    nav:false,
    rtl: this.checkDirection(),
    dots: false,
    navText: ['', ''],
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1200:{
            items:3
        }
    }
  }

  checkDirection() {
    var htmlClassName = document.getElementsByTagName('html')[0].getAttribute('class');
    if (htmlClassName == 'rtl') {
      return true;
    } else {
      return false;

    }
  }
}

