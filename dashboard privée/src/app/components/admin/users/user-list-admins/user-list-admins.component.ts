import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../../../services/token-storage.service';

@Component({
  selector: 'app-user-list-admins',
  standalone: true,
  templateUrl: './user-list-admins.component.html',
  styleUrl: './user-list-admins.component.css',
  imports: [CommonModule]
})
export class UserListAdminsComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService, private router: Router, private tokenStorage: TokenStorageService) {}

  ngOnInit(): void {
    const rolesAdmin = ['ADMIN', 'MANAGER', 'RH', 'EXPERT_TECHNIQUE'];

    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data.filter(user =>
          user.roles.some((role: { name: string }) => rolesAdmin.includes(role.name))
        );
        
      },
      error: (err) => console.error('Erreur lors du chargement des utilisateurs administratifs :', err)
    });

    console.log("Utilisateur connecté :", this.tokenStorage.getUser());

  }

  editUser(userId: number): void {
    this.router.navigate(['/admin/users/edit', userId]);
  }

  deleteUser(userId: number): void {
    console.log("Suppression de l'utilisateur", userId); // ← pour test
    if (confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
      this.userService.deleteUser(userId).subscribe(() => {
        this.ngOnInit(); // Recharge la liste
      }, error => console.error('Erreur lors de la suppression', error));
    }
  }
  
}
