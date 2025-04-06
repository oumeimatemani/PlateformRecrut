import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-browse-caregory',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './browse-caregory.component.html',
  styleUrl: './browse-caregory.component.scss'
})
export class BrowseCaregoryComponent {
  categoryData = [
    {
      title:'Human Resource',
      job:'90 Jobs Available'
    },
    {
      title:'It & Networking',
      job:'90 Jobs Available'
    },
    {
      title:'Sales & Marketing',
      job:'90 Jobs Available'
    },
    {
      title:'Accounting',
      job:'90 Jobs Available'
    },
    {
      title:'Delivery Boy',
      job:'90 Jobs Available'
    },
    {
      title:'Data Science',
      job:'90 Jobs Available'
    },
    {
      title:'Project Manager',
      job:'90 Jobs Available'
    },
    {
      title:'Engineering',
      job:'90 Jobs Available'
    },
    {
      title:'Help Center',
      job:'90 Jobs Available'
    },
    {
      title:'Full Stack Developer',
      job:'90 Jobs Available'
    },
  ]
}
