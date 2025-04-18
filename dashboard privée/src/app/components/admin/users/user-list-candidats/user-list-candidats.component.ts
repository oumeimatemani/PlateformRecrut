import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list-candidats',
  standalone: true,
  templateUrl: './user-list-candidats.component.html',
  styleUrl: './user-list-candidats.component.css',
  imports: [CommonModule]
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

  deleteUser(userId: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce candidat ?')) {
      this.userService.deleteUser(userId).subscribe(() => {
        this.ngOnInit(); // Recharge la liste
      }, error => console.error('Erreur lors de la suppression', error));
    }
  }
}
