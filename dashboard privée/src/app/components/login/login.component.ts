import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { TokenStorageService } from '../../services/token-storage.service';

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
  imports: [FormsModule]
})
export class LoginComponent {
  form: any = { username: '', password: '' };
  isLoginFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) {}

  onSubmit(): void {
    this.authService.login(this.form).subscribe({
      
      next: data => {
        this.tokenStorage.saveToken(data.token); 
        this.tokenStorage.saveUser(data);   
              
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
