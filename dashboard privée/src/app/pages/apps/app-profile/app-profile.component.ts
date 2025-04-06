import { Component } from '@angular/core';
import { ProfileTabComponent } from '../../../elements/short-cods/apps/profile-tab/profile-tab.component';
import { ProfileSidMenuComponent } from '../../../elements/short-cods/apps/profile-sid-menu/profile-sid-menu.component';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { ProfileHeadComponent } from '../../../elements/short-cods/apps/profile-head/profile-head.component';

@Component({
  selector: 'app-app-profile',
  standalone: true,
  imports: [
    ProfileTabComponent,
    ProfileSidMenuComponent,
    BreadcrumbComponent,
    ProfileHeadComponent
  ],
  templateUrl: './app-profile.component.html',
  styleUrl: './app-profile.component.css'
})
export class AppProfileComponent {
  breadcrumbList = {
    title: 'Hi, welcome back!',
    subTitle: 'Your business dashboard template',
    breadcrumb_path: 'Apps',
    currentURL: 'Profile',
  }
  profileDetailArray = {
    name:'Mitchell C. Shay',
    email: 'info@example.com'
  }
}
