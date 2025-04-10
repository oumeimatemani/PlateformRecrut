import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BackToHomeComponent } from '../../../components/back-to-home/back-to-home.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../data/user';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    BackToHomeComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showNotification: any;
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
  
    UserForm: FormGroup;
    isAddEventFormVisible: any;
  
    constructor(private UserService: UserService, private fb: FormBuilder) {
     
    }
    selectedRoles: string[] = [];
    allRoles: string[] = ["ROLE_USER", "ROLE_ADMIN", "ROLE_STUDENT", "ROLE_ALUMNI", "ROLE_EXHIBITOR"];
    selectedRole :string;

    ngOnInit(): void {
      this.loadUsers();
    }
  
    loadUsers(): void {
      this.UserService.getAllUsers().subscribe((Users: User[]) => {
        console.log(Users);
        this.Users = Users;
        this.UsersNoFilter =Users ;

      });
    }
    selectRole(role: string): void {
      this.selectedRole = role;
    }

  

    filterUsersByRoles(): void {
      if (this.selectedRole.length > 0) {
        this.Users = this.UsersNoFilter.filter(user => {
          return user.roles.some(role => this.selectedRole.includes(role.name));
        });
      }
    }
}
