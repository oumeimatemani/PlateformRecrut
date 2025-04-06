import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-candidate-profile-setting',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './candidate-profile-setting.component.html',
  styleUrl: './candidate-profile-setting.component.scss'
})
export class CandidateProfileSettingComponent {

  file:any;
  file2:any;
  file3:any;

  handleChange(e:any) {
    this.file = URL.createObjectURL(e.target.files[0])
  }
  handleChange2(e:any) {
    this.file2 = URL.createObjectURL(e.target.files[0])
  }
  handleChange3(e:any) {
    this.file3 = URL.createObjectURL(e.target.files[0])
  }
}
