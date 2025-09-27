import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface OnboardingSlide {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  isLast: boolean;
  icon: string;
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
      description: 'Be part of Gamification - the all-in-one gaming community platform.',
      buttonText: 'Next',
      isLast: false,
      icon: '📄'
    },
    {
      id: 2,
      title: 'Easy Payment',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      buttonText: 'Next',
      isLast: false,
      icon: '💳'
    },
    {
      id: 3,
      title: 'Big Awards',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      buttonText: 'Get Started',
      isLast: true,
      icon: '🏅'
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
