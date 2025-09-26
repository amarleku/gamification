import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\+?[\d\s-()]+$/)]],
      dateOfBirth: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.signupForm.valid) {
      this.isLoading = true;
      // Simulate signup process
      setTimeout(() => {
        this.isLoading = false;
        // Navigate to password setup
        this.router.navigate(['/profile-setup/password']);
      }, 1500);
    } else {
      this.markFormGroupTouched();
    }
  }

  onSocialLogin(provider: string): void {
    console.log(`Signup with ${provider}`);
    // Implement social signup logic here
  }

  onBackClick(): void {
    this.router.navigate(['/auth/login']);
  }

  private markFormGroupTouched(): void {
    Object.keys(this.signupForm.controls).forEach(key => {
      const control = this.signupForm.get(key);
      control?.markAsTouched();
    });
  }

  get fullNameError(): string {
    const control = this.signupForm.get('fullName');
    if (control?.touched && control?.errors) {
      if (control.errors['required']) return 'Full name is required';
      if (control.errors['minlength']) return 'Name must be at least 2 characters';
    }
    return '';
  }

  get emailError(): string {
    const control = this.signupForm.get('email');
    if (control?.touched && control?.errors) {
      if (control.errors['required']) return 'Email is required';
      if (control.errors['email']) return 'Please enter a valid email';
    }
    return '';
  }

  get mobileError(): string {
    const control = this.signupForm.get('mobileNumber');
    if (control?.touched && control?.errors) {
      if (control.errors['required']) return 'Mobile number is required';
      if (control.errors['pattern']) return 'Please enter a valid mobile number';
    }
    return '';
  }

  get dateOfBirthError(): string {
    const control = this.signupForm.get('dateOfBirth');
    if (control?.touched && control?.errors) {
      if (control.errors['required']) return 'Date of birth is required';
    }
    return '';
  }
}
