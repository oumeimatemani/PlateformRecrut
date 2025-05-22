import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { PreselectionFormComponent } from '../../../RH/candidatures/preselection-form/preselection-form.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-list-candidats',
  standalone: true,
  templateUrl: './user-list-candidats.component.html',
  styleUrl: './user-list-candidats.component.css',
  imports: [CommonModule, RouterModule, PreselectionFormComponent, FormsModule]
})
export class UserListCandidatsComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}
  
  ngOnInit(): void {
    console.log("Token dans localStorage :", localStorage.getItem('auth-token')); 
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data.filter(user =>
          user.roles.some((role: { name: string }) => role.name === 'CANDIDAT')
        );
      },
      error: (err) => console.error('Erreur lors du chargement des candidats :', err)
    });
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
  

  
  
}
