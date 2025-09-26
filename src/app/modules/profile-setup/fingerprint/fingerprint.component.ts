import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fingerprint',
  templateUrl: './fingerprint.component.html',
  styleUrls: ['./fingerprint.component.scss']
})
export class FingerprintComponent implements OnInit {
  isScanning = false;
  isCompleted = false;
  scanProgress = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  startScan(): void {
    this.isScanning = true;
    this.scanProgress = 0;
    
    // Simulate fingerprint scanning process
    const scanInterval = setInterval(() => {
      this.scanProgress += 10;
      
      if (this.scanProgress >= 100) {
        clearInterval(scanInterval);
        this.isScanning = false;
        this.isCompleted = true;
        
        // Auto-navigate after completion
        setTimeout(() => {
          this.router.navigate(['/dashboard']); // Navigate to main app
        }, 2000);
      }
    }, 200);
  }

  onContinue(): void {
    if (this.isCompleted) {
      this.router.navigate(['/dashboard']);
    } else {
      this.startScan();
    }
  }

  onSkip(): void {
    this.router.navigate(['/dashboard']);
  }

  onBackClick(): void {
    this.router.navigate(['/profile-setup/password']);
  }
}
