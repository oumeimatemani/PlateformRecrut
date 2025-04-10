import { Component, OnInit } from '@angular/core';
import { Role } from '../../../../models/role';
import { RoleService } from '../../../../services/role.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-role-list',
  standalone: true,
  templateUrl: './role-list.component.html',
  styleUrl: './role-list.component.css',
  imports: [CommonModule]
})
export class RoleListComponent implements OnInit {

  roles: Role[] = [];

  constructor(private roleService: RoleService) {}

  ngOnInit(): void {
    this.roleService.getAllRoles().subscribe({
      next: (data) => {
        this.roles = data;
      },
      error: (err) => console.error('Erreur lors du chargement des rôles :', err)
    });
  }

  deleteRole(id: number): void {
    if (confirm("Confirmer la suppression de ce rôle ?")) {
      this.roleService.deleteRole(id).subscribe(() => {
        this.roles = this.roles.filter(role => role.id !== id);
      });
    }
  }
}
