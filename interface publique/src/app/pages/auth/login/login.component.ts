import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BackToHomeComponent } from '../../../components/back-to-home/back-to-home.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { User } from '../../../data/user';
import { AuthService } from '../../../_services/auth.service';
import { TokenStorageService } from '../../../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CommonModule, 
    FormsModule,
    BackToHomeComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form: any = {
    username: null,
    password: null
  };
  isLoginFailed = false;
  errorMessage = '';


  showNotification: any;
date: any;
  onInputChange() {
  throw new Error('Method not implemented.');
  }
  isModified: any;
  setStatus(arg0: string) {
  throw new Error('Method not implemented.');
  }
    Users: User[] = [];
    UsersNoFilter: User[] = [];

    selectedUser: User | null = null;
  
    isAddEventFormVisible: any;
  
    constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {}

    allRoles: string[] = ["ROLE_USER", "ROLE_ADMIN", "ROLE_STUDENT", "ROLE_ALUMNI", "ROLE_EXHIBITOR"];

    ngOnInit(): void {
    }
  
    onSubmit(): void {
      console.log("Tentative de login avec : ", this.form);
    
      this.authService.login(this.form).subscribe({
        next: data => {
          console.log("Réponse backend :", data);
    
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data);
    
          const roles: string[] = data.roles;
    
          //Vérifie si l'utilisateur a un rôle "interne"
          const isInternalUser = roles.includes('ROLE_ADMIN') ||
                                 roles.includes('ROLE_RH') ||
                                 roles.includes('ROLE_MANAGER') ||
                                 roles.includes('ROLE_EXPERT_TECHNIQUE');
    
          if (isInternalUser) {
            // Redirection vers le dashboard privé externe
            const token = data.token;
            const dashboardUrl = `http://localhost:4300/dashboard?token=${token}`; 
            window.location.href = dashboardUrl;
          } else {
            //Redirection locale pour les visiteurs/candidats
            this.router.navigate(['/']);
          }
        },
        error: err => {
          console.error("Erreur login :", err);
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      });
    }
    
    
 

}
