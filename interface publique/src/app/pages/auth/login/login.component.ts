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


    ngOnInit(): void {
    }
  
    
    onSubmit(): void {
      console.log("Tentative de login avec : ", this.form);
    
      this.authService.login(this.form).subscribe({
        next: data => {
          console.log("Réponse backend :", data);
    
          //this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveToken(data.accessToken);

          this.tokenStorage.saveUser(data);
    
          const roles: string[] = data.roles;
          const username = data.username;
          const token = data.accessToken;
    
          const internalRoles = ['ROLE_ADMIN', 'ROLE_RH', 'ROLE_MANAGER', 'ROLE_EXPERT_TECHNIQUE'];
          const matchedRole = roles.find(role => internalRoles.includes(role));
    
          if (matchedRole && token) {
            //Redirection avec tous les paramètres
            const dashboardUrl = `http://localhost:4300/admin?token=${token}&username=${encodeURIComponent(username)}&role=${encodeURIComponent(matchedRole)}`;
            window.open(dashboardUrl, '_blank');
          } else {
            // Redirection vers site public
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
