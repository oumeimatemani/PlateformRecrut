import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  imports: [CommonModule]  
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();

    this.userService.getAllUsers().subscribe({
      next: (data) => {
        console.log('UTILISATEURS REÇUS:', data); 
        this.users = data;
      },
      error: (err) => console.error('Erreur lors du chargement des utilisateurs :', err)
    });
  }
  

  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err: any) => console.error('Erreur lors du chargement des utilisateurs :', err)
    });
  }
  

  editUser(userId: number): void {
    this.router.navigate(['/admin/users/edit', userId]);
  }
  
  
    
    deleteUser(userId: number): void {
      const confirmation = confirm('Voulez-vous vraiment supprimer cet utilisateur ?');
      if (confirmation) {
        this.userService.deleteUser(userId).subscribe(() => {
          // Actualiser la liste après suppression
          this.loadUsers();
        }, error => {
          console.error('Erreur lors de la suppression', error);
        });
      }
    }

}
