import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {
  isLoading = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false;
      // Navigate to onboarding after loading
      setTimeout(() => {
        this.router.navigate(['/onboarding']);
      }, 1000);
    }, 2000);
  }
}
