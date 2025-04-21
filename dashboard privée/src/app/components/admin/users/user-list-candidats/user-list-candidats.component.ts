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
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data.filter(user =>
          user.roles.some((role: { name: string }) => role.name === 'CANDIDAT')
        );
        
      },
      error: (err) => console.error('Erreur lors du chargement des candidats :', err)
    });
  }

  editUser(userId: number): void {
    this.router.navigate(['/admin/users/edit', userId]);
  }


  deleteUser(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûr(e) ?',
      text: 'Cette action supprimera définitivement le Candidat .',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(id).subscribe(() => {
  
          Swal.fire({
            icon: 'success',
            title: 'Candidat supprimé avec succès !',
            showConfirmButton: false,
            timer: 1500
          });
        }, error => {
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Une erreur est survenue pendant la suppression.',
          });
          console.error("Erreur lors de la suppression :", error);
        });
      }
    });
  }
  
  
  
}
