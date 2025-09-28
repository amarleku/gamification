import { Component, OnInit } from '@angular/core';
import { WeatherService, WeatherData } from '../../shared/services/weather.service';

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
  // Dynamic greeting and weather properties
  currentGreeting = 'Good Morning';
  currentTemperature = '--°C';
  currentLocation = 'Loading...';
  
  // Touch/swipe properties
  touchStartX = 0;
  touchEndX = 0;
  minSwipeDistance = 30; // Minimum distance for a swipe
  
  // Games scroll properties
  gamesScrollStartX = 0;
  gamesScrollEndX = 0;
  gamesScrollElement: HTMLElement | null = null;

  categories: Category[] = [
    { id: '1', name: 'Restaurant', icon: 'assets/icons/resturant.png' },
    { id: '2', name: 'Lounge&Bars', icon: 'assets/icons/lounge.png' },
    { id: '3', name: 'Fast-Food', icon: 'assets/icons/fastfood.png' },
    { id: '4', name: 'Airline Agencies', icon: 'assets/icons/plane.png' },
    { id: '5', name: 'Tech Stores', icon: 'assets/icons/console.png' }
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
      image: 'assets/icons/astrology.png',
      price: '$2',
      rating: 5.0,
      isFavorite: true
    },
    { 
      id: '2', 
      title: 'Music', 
      image: 'assets/icons/music.png',
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
      image: 'assets/images/Photo Pizza.png',
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
  totalBanners = 4;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    // Initialize dynamic greeting and weather
    this.updateGreeting();
    this.loadWeatherData();
    
    // Auto-rotate banners every 5 seconds
    setInterval(() => {
      this.nextBanner();
    }, 5000);
    
    // Get games scroll element reference
    setTimeout(() => {
      this.gamesScrollElement = document.querySelector('.games-scroll');
    }, 100);
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
    console.log('Touch start');
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent): void {
    // Prevent scrolling during horizontal swipe
    const touchX = event.touches[0].clientX;
    const diffX = Math.abs(touchX - this.touchStartX);
    
    if (diffX > 10) {
      event.preventDefault();
    }
  }

  onTouchEnd(event: TouchEvent): void {
    console.log('Touch end');
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  // Mouse events for desktop testing
  onMouseDown(event: MouseEvent): void {
    console.log('Mouse down');
    this.touchStartX = event.clientX;
  }

  onMouseUp(event: MouseEvent): void {
    console.log('Mouse up');
    this.touchEndX = event.clientX;
    this.handleSwipe();
  }

  // Games scroll touch events
  onGamesTouchStart(event: TouchEvent): void {
    this.gamesScrollStartX = event.touches[0].clientX;
  }

  onGamesTouchMove(event: TouchEvent): void {
    if (this.gamesScrollElement) {
      const touchX = event.touches[0].clientX;
      const diffX = this.gamesScrollStartX - touchX;
      const currentScroll = this.gamesScrollElement.scrollLeft;
      this.gamesScrollElement.scrollLeft = currentScroll + diffX;
      this.gamesScrollStartX = touchX;
    }
  }

  onGamesTouchEnd(event: TouchEvent): void {
    // Optional: Add momentum scrolling or snap behavior here
  }

  // Games scroll mouse events for desktop
  onGamesMouseDown(event: MouseEvent): void {
    this.gamesScrollStartX = event.clientX;
  }

  onGamesMouseMove(event: MouseEvent): void {
    if (this.gamesScrollElement && event.buttons === 1) { // Left mouse button pressed
      const diffX = this.gamesScrollStartX - event.clientX;
      const currentScroll = this.gamesScrollElement.scrollLeft;
      this.gamesScrollElement.scrollLeft = currentScroll + diffX;
      this.gamesScrollStartX = event.clientX;
    }
  }

  onGamesMouseUp(event: MouseEvent): void {
    // Mouse up - stop scrolling
  }

  handleSwipe(): void {
    const swipeDistance = this.touchEndX - this.touchStartX;
    
    console.log('Swipe detected:', swipeDistance, 'Min distance:', this.minSwipeDistance);
    
    if (Math.abs(swipeDistance) > this.minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swipe right - go to previous banner
        console.log('Swipe right - previous banner');
        this.previousBanner();
      } else {
        // Swipe left - go to next banner
        console.log('Swipe left - next banner');
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

  // Dynamic greeting based on time of day
  updateGreeting(): void {
    const currentHour = new Date().getHours();
    
    if (currentHour >= 5 && currentHour < 12) {
      this.currentGreeting = 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      this.currentGreeting = 'Good Afternoon';
    } else if (currentHour >= 17 && currentHour < 21) {
      this.currentGreeting = 'Good Evening';
    } else {
      this.currentGreeting = 'Good Night';
    }
  }

  // Load weather data using the weather service
  async loadWeatherData(): Promise<void> {
    try {
      const weatherData = await this.weatherService.getWeatherData();
      this.currentTemperature = weatherData.temperature;
      this.currentLocation = weatherData.location;
    } catch (error) {
      console.error('Error loading weather data:', error);
      this.currentTemperature = '--°C';
      this.currentLocation = 'Location unavailable';
    }
  }
}
