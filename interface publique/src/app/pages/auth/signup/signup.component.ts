import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackToHomeComponent } from '../../../components/back-to-home/back-to-home.component';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../_services/auth.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    BackToHomeComponent,
    CommonModule, 
    FormsModule, 
    RouterLink,

  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
 form: any = {
  username: '',
  email: '',
  password: ''
};
isSuccessful = false;
isSignUpFailed = false;
errorMessage = '';
date = new Date().getFullYear();
acceptedTerms = false;


constructor(private authService: AuthService, private router: Router) {}


ngOnInit(): void {
}

onSubmit(): void {
  if (!this.acceptedTerms) {
    this.errorMessage = 'Vous devez accepter les conditions.';
    this.isSignUpFailed = true;
    return;
  }

  this.authService.register(this.form).subscribe({
    next: data => {
      this.isSuccessful = true;
      this.isSignUpFailed = false;
      this.router.navigate(['/login']);
    },
    error: err => {
      this.errorMessage = err.error.message || 'Une erreur est survenue.';
      this.isSignUpFailed = true;
    }
  });
}



}
