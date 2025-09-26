import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      // Simulate login process
      setTimeout(() => {
        this.isLoading = false;
        // Navigate to profile setup or main app
        this.router.navigate(['/profile-setup']);
      }, 1500);
    } else {
      this.markFormGroupTouched();
    }
  }

  onSocialLogin(provider: string): void {
    console.log(`Login with ${provider}`);
    // Implement social login logic here
  }

  onForgotPassword(): void {
    console.log('Forgot password clicked');
    // Implement forgot password logic here
  }

  onBackClick(): void {
    this.router.navigate(['/onboarding']);
  }

  private markFormGroupTouched(): void {
    Object.keys(this.loginForm.controls).forEach(key => {
      const control = this.loginForm.get(key);
      control?.markAsTouched();
    });
  }

  get emailError(): string {
    const emailControl = this.loginForm.get('email');
    if (emailControl?.touched && emailControl?.errors) {
      if (emailControl.errors['required']) return 'Email is required';
      if (emailControl.errors['email']) return 'Please enter a valid email';
    }
    return '';
  }

  get passwordError(): string {
    const passwordControl = this.loginForm.get('password');
    if (passwordControl?.touched && passwordControl?.errors) {
      if (passwordControl.errors['required']) return 'Password is required';
      if (passwordControl.errors['minlength']) return 'Password must be at least 6 characters';
    }
    return '';
  }
}
