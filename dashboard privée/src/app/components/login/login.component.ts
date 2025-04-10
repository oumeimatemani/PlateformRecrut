import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <form (submit)="onSubmit()">
      <label for="username">Username:</label>
      <input type="text" [(ngModel)]="form.username" name="username" required>
      <label for="password">Password:</label>
      <input type="password" [(ngModel)]="form.password" name="password" required>
      <button type="submit">Login</button>
    </form>
    <p *ngIf="isLoginFailed">{{ errorMessage }}</p>
  `,
  imports: []
})
export class LoginComponent {
  form: any = { username: '', password: '' };
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService.login(this.form.username, this.form.password).subscribe({
      next: data => {
        localStorage.setItem('token', data.token);
        this.isLoginFailed = false;
        alert('Login Successful');
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
}
