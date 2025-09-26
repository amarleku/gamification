import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface OnboardingSlide {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  isLast: boolean;
}

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  currentSlide = 0;
  
  slides: OnboardingSlide[] = [
    {
      id: 1,
      title: 'Hello',
      description: 'Be part of Gamification - the all-in-one platform for a gamified experience.',
      buttonText: 'Next',
      isLast: false
    },
    {
      id: 2,
      title: 'Easy Payment',
      description: 'Make secure payments with our integrated payment system. Fast, safe, and reliable transactions.',
      buttonText: 'Next',
      isLast: false
    },
    {
      id: 3,
      title: 'Big Awards',
      description: 'Earn points, unlock achievements, and get rewarded for your progress. The more you engage, the more you gain!',
      buttonText: 'Get Started',
      isLast: true
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  nextSlide(): void {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
    } else {
      // Navigate to login/signup
      this.router.navigate(['/auth']);
    }
  }

  previousSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  skipOnboarding(): void {
    this.router.navigate(['/auth']);
  }

  get currentSlideData(): OnboardingSlide {
    return this.slides[this.currentSlide];
  }
}
