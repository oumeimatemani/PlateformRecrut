import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TokenStorageService } from '../../../../services/token-storage.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list-admins',
  standalone: true,
  templateUrl: './user-list-admins.component.html',
  styleUrl: './user-list-admins.component.css',
  imports: [CommonModule, RouterModule, FormsModule]
})
export class UserListAdminsComponent implements OnInit {

  users: User[] = [];

  allRoles = [
    { id: 1, name: 'ADMIN' },
    { id: 2, name: 'RH' },
    { id: 3, name: 'MANAGER' },
    { id: 4, name: 'EXPERT_TECHNIQUE' }
  ];
  

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


  editUser(user: User): void {
    Swal.fire({
      title: 'Modifier utilisateur',
      html:
        `<input id="username" class="swal2-input" value="${user.username}" placeholder="Nom d'utilisateur">` +
        `<input id="email" class="swal2-input" value="${user.email}" placeholder="Email">` +
        `<input id="phone" class="swal2-input" value="${user.phoneNumber}" placeholder="Téléphone">` +
        `<input id="password" class="swal2-input" placeholder="Nouveau mot de passe">`,
      preConfirm: () => {
        return {
          username: (document.getElementById('username') as HTMLInputElement).value,
          email: (document.getElementById('email') as HTMLInputElement).value,
          phoneNumber: (document.getElementById('phone') as HTMLInputElement).value,
          password: (document.getElementById('password') as HTMLInputElement).value || null
        };
      }
    }).then(result => {
      if (result.isConfirmed) {
        const updatedData = result.value;
        if (!updatedData.password) delete updatedData.password; // éviter erreur si vide
        this.userService.updateUser(user.id, updatedData).subscribe({
          next: () => {
            Swal.fire('Succès', 'Utilisateur modifié avec succès', 'success');
            this.ngOnInit();
          },
          error: err => Swal.fire('Erreur', err.error.message || 'Échec de la modification', 'error')
        });
      }
    });
  }
  
  deleteUser(id: number): void {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: "Cette action est irréversible !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer !'
    }).then(result => {
      if (result.isConfirmed) {
        this.userService.deleteUser(id).subscribe({
          next: () => {
            Swal.fire('Supprimé', 'Utilisateur supprimé avec succès', 'success');
            this.ngOnInit();
          },
          error: () => Swal.fire('Erreur', 'Échec de la suppression', 'error')
        });
      }
    });
  }
  
  changeRole(user: User): void {
    Swal.fire({
      title: `Modifier rôle de ${user.username}`,
      input: 'select',
      inputOptions: {
        ADMIN: 'ADMIN',
        RH: 'RH',
        MANAGER: 'MANAGER',
        EXPERT_TECHNIQUE: 'EXPERT_TECHNIQUE'
      },
      inputValue: user.roles[0]?.name || '',
      showCancelButton: true
    }).then(result => {
      if (result.isConfirmed) {
        this.userService.updateRole(user.id, result.value).subscribe({
          next: () => {
            Swal.fire('Succès', 'Rôle mis à jour', 'success');
            this.ngOnInit();
          },
          error: () => Swal.fire('Erreur', 'Impossible de changer le rôle', 'error')
        });
      }
    });
  }
  
  
}
