// @ts-nocheck
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToHomeComponent } from '../../../components/back-to-home/back-to-home.component';

@Component({
  selector: 'app-comingsoon',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    BackToHomeComponent
  ],
  templateUrl: './comingsoon.component.html',
  styleUrl: './comingsoon.component.scss'
})
export class ComingsoonComponent {

  datefooter:any;
  ngOnInit(): void {
    this.datefooter = new Date().getFullYear();
  }
  date: any;
  now: any;
  targetDate: any = new Date(2025, 9, 13);
  targetTime: any = this.targetDate.getTime();
  difference: number;
  days= ''
  hours = ''
  minutes = ''
  seconds = ''

  ngAfterViewInit() {
    setInterval(() => {
      this.tickTock();
      this.difference = this.targetTime - this.now;
      this.difference = this.difference / (1000 * 60 * 60 * 24);
    }, 1000);

  }
  
  tickTock() {
    this.date = new Date();
    this.now = this.date.getTime();
    this.days = Math.floor(this.difference);
    this.hours = 23 - this.date.getHours();
    this.minutes = 60 - this.date.getMinutes();
    this.seconds = 60 - this.date.getSeconds();
  }
}
