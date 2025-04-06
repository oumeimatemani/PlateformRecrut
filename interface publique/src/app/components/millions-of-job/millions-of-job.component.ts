import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-millions-of-job',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './millions-of-job.component.html',
  styleUrl: './millions-of-job.component.scss'
})
export class MillionsOfJobComponent {
  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
