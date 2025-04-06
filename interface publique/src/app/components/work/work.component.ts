import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  workData = [
    {
      icon:'uil uil-airplay',
      title:'Create Account',
      desc:'The phrasal sequence of the is now so that many campaign and benefit',
      shadow:false
    },
    {
      icon:'uil uil-shutter',
      title:'Complete Your Profile',
      desc:'The phrasal sequence of the is now so that many campaign and benefit',
      shadow:true
    },
    {
      icon:'uil uil-camera-plus',
      title:'Apply Job or Hire',
      desc:'The phrasal sequence of the is now so that many campaign and benefit',
      shadow:false
    },
  ]
}
