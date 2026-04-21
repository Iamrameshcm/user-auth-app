import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-forgot-pass',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-pass.html',
  styleUrl: './forgot-pass.scss',
})
export class ForgotPass {
  loginForm: any;
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: Auth,
    private snackBar: MatSnackBar,
  ) {}

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.auth.forgot(this.loginForm.value).subscribe({
      next: (res: any) => {
        this.snackBar.open(res.message, 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['success-snackbar'],
        });
      },
      error: (err) => {
        this.snackBar.open(err.error?.message || 'Login failed', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['error-snackbar'],
        });
      },
    });
  }
}
