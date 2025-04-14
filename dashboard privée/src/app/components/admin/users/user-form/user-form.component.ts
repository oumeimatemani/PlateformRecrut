import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
  imports: [CommonModule, ReactiveFormsModule] // <-- indispensable
})
export class UserFormComponent implements OnInit {

  userForm!: FormGroup;
  userId?: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    console.log("Composant UserForm chargé !");

    this.userId = Number(this.route.snapshot.paramMap.get('id'));

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    if (this.userId) {
      this.userService.getUser(this.userId).subscribe(userData => {
        this.userForm.patchValue({
          name: userData.username,
          email: userData.email,
        });
      }, error => {
        console.error('Erreur lors du chargement de l’utilisateur', error);
      });
    }
  }

  onSubmit(): void {
    if (this.userForm.invalid) return;
    if (this.userId) {
      this.userService.updateUser(this.userId, this.userForm.value).subscribe(() => {
        this.router.navigate(['/admin/users']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/admin/users']);
  }
}
