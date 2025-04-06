import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-job',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './get-job.component.html',
  styleUrl: './get-job.component.scss'
})
export class GetJobComponent {

  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }

}
