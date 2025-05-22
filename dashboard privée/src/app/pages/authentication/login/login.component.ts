import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { TokenStorageService } from '../../../services/token-storage.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  form: any = {
    username: '',
    password: ''
  };
  isLoginFailed = false;
  errorMessage = '';
  date = new Date().getFullYear();
  hide_show: boolean = false;

  
  
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.authService.login(this.form).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        const roles = data.roles;
        const matchedRole = roles.find((r: string) =>
          ['ROLE_ADMIN', 'ROLE_RH', 'ROLE_MANAGER', 'ROLE_EXPERT_TECHNIQUE'].includes(r)
        );

        // Redirection intelligente
        if (matchedRole === 'ROLE_ADMIN') this.router.navigate(['/admin/index']);
        else if (matchedRole === 'ROLE_RH') this.router.navigate(['/rh/candidatures']);
        else if (matchedRole === 'ROLE_MANAGER') this.router.navigate(['/manager/profils-preslectionnes']);
        else if (matchedRole === 'ROLE_EXPERT_TECHNIQUE') this.router.navigate(['/expert/tests']);
        else this.router.navigate(['/']); // fallback
      },
      error: err => {
        this.errorMessage = err.error.message || 'Identifiants invalides';
        this.isLoginFailed = true;
      }
    });
  }


  passwordHide(): void {
    this.hide_show = !this.hide_show;
  }
}
