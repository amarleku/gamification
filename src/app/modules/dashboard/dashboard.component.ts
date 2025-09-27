import { Component, OnInit } from '@angular/core';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface Game {
  id: string;
  title: string;
  image: string;
  price?: string;
  rating?: number;
  isFavorite?: boolean;
}

interface Banner {
  id: string;
  title: string;
  subtitle: string;
  discount: string;
  image: string;
  label: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // Touch/swipe properties
  touchStartX = 0;
  touchEndX = 0;
  minSwipeDistance = 50; // Minimum distance for a swipe

  categories: Category[] = [
    { id: '1', name: 'Restaurant', icon: '🍽️' },
    { id: '2', name: 'Lounge&Bars', icon: '🍸' },
    { id: '3', name: 'Fast-Food', icon: '🍔' },
    { id: '4', name: 'Airline Agencies', icon: '✈️' },
    { id: '5', name: 'Tech Stores', icon: '🎮' }
  ];

  quickGames: Game[] = [
    { id: '1', title: 'Bowling', image: 'assets/images/bowling.jpg' },
    { id: '2', title: 'Tic-Tac', image: 'assets/images/tic-tac.png' },
    { id: '3', title: 'Basketball', image: 'assets/images/backetbakk.png' },
    { id: '4', title: 'Find', image: 'assets/images/find.png' }
  ];

  quizGames: Game[] = [
    { 
      id: '1', 
      title: 'Astrology', 
      image: 'assets/images/astrology.svg',
      price: '$2',
      rating: 5.0,
      isFavorite: true
    },
    { 
      id: '2', 
      title: 'Music', 
      image: 'assets/images/music.svg',
      price: '$2',
      rating: 5.0,
      isFavorite: true
    }
  ];

  banners: Banner[] = [
    {
      id: '1',
      title: 'Experience our delicious new dish',
      subtitle: '50% OFF',
      discount: '50% OFF',
      image: 'assets/images/Photo Pizza.png',
      label: 'Win By Playing A Game'
    },
    {
      id: '2',
      title: 'Special Gaming Tournament',
      subtitle: '30% OFF',
      discount: '30% OFF',
      image: 'aassets/images/Photo Pizza.png',
      label: 'Join Now'
    },
    {
      id: '3',
      title: 'New Music Quiz Available',
      subtitle: 'FREE',
      discount: 'FREE',
      image: 'assets/images/Photo Pizza.png',
      label: 'Play Now'
    },
    {
      id: '4',
      title: 'Astrology Challenge',
      subtitle: '25% OFF',
      discount: '25% OFF',
      image: 'assets/images/Photo Pizza.png',
      label: 'Start Quiz'
    }
  ];

  currentBannerIndex = 0;
  totalBanners = 5;

  constructor() { }

  ngOnInit(): void {
    // Auto-rotate banners every 5 seconds
    setInterval(() => {
      this.nextBanner();
    }, 5000);
  }

  onCategoryClick(category: Category): void {
    console.log('Category clicked:', category);
  }

  onGameClick(game: Game): void {
    console.log('Game clicked:', game);
  }

  onViewAll(section: string): void {
    console.log('View all clicked for:', section);
  }

  onBannerClick(banner: Banner): void {
    console.log('Banner clicked:', banner);
    // Add navigation logic here if needed
  }

  onPaginationClick(index: number): void {
    this.currentBannerIndex = index;
  }

  nextBanner(): void {
    this.currentBannerIndex = (this.currentBannerIndex + 1) % this.totalBanners;
  }

  previousBanner(): void {
    this.currentBannerIndex = this.currentBannerIndex === 0 ? this.totalBanners - 1 : this.currentBannerIndex - 1;
  }

  // Touch event handlers for swipe functionality
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
    // Prevent default to avoid scrolling while swiping
    event.preventDefault();
  }

  onTouchMove(event: TouchEvent): void {
    // Prevent scrolling during horizontal swipe
    if (Math.abs(event.touches[0].clientX - this.touchStartX) > 10) {
      event.preventDefault();
    }
  }

  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  handleSwipe(): void {
    const swipeDistance = this.touchEndX - this.touchStartX;
    
    if (Math.abs(swipeDistance) > this.minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swipe right - go to previous banner
        this.previousBanner();
      } else {
        // Swipe left - go to next banner
        this.nextBanner();
      }
    }
  }

  onSearch(): void {
    console.log('Search clicked');
  }

  onNotificationClick(): void {
    console.log('Notification clicked');
  }

  onProfileClick(): void {
    console.log('Profile clicked');
  }

  onGameControllerClick(): void {
    console.log('Game controller clicked');
  }
}
