import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-form',
  standalone: true,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
  imports: [CommonModule, ReactiveFormsModule] 
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  userId!: number;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));

    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['']
    });

    this.userService.getUser(this.userId).subscribe({
      next: (user) => {
        this.userForm.patchValue({
          username: user.username,
          email: user.email,
          phoneNumber: user.phoneNumber
        });
      },
      error: (err) => console.error('Erreur chargement utilisateur', err)
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.userService.updateUser(this.userId, this.userForm.value).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Utilisateur mis à jour',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/admin/candidats']); // ou admin/users
        },
        error: (err) => {
          console.error('Erreur mise à jour :', err);
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Impossible de mettre à jour l\'utilisateur.'
          });
        }
      });
    }
  }
}