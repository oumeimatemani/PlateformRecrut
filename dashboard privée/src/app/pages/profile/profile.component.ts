import { Component } from '@angular/core';
import { Select2Component } from '../../plugins/select2/select2.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    Select2Component
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  email = 'info@example.com';
  selectData1 = [
    {
      name: 'London',
    },
    {
      name: 'NewYork',
    },
    {
      name: 'Dhaka',
    },
    {
      name: 'Beijing',
    },
    {
      name: 'Djibouti',
    }
  ];
  selectData2 = [
    {
      name: 'England',
    },
    {
      name: 'United State',
    },
    {
      name: 'United Kingdom',
    },
    {
      name: 'Germany',
    },
    {
      name: 'Netherland',
    }
  ];
}
