import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToHomeComponent } from '../../../components/back-to-home/back-to-home.component';

@Component({
  selector: 'app-thankyou',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    BackToHomeComponent
  ],
  templateUrl: './thankyou.component.html',
  styleUrl: './thankyou.component.scss'
})
export class ThankyouComponent {

}
