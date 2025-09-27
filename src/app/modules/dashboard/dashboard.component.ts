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
  categories: Category[] = [
    { id: '1', name: 'Restaurant', icon: '🍽️' },
    { id: '2', name: 'Lounge&Bars', icon: '🍸' },
    { id: '3', name: 'Fast-Food', icon: '🍔' },
    { id: '4', name: 'Airline Agencies', icon: '✈️' },
    { id: '5', name: 'Tech Stores', icon: '🎮' }
  ];

  quickGames: Game[] = [
    { id: '1', title: 'Bowling', image: 'assets/images/bowling.svg' },
    { id: '2', title: 'Tic-Tac', image: 'assets/images/tic-tac.svg' },
    { id: '3', title: 'Basketball', image: 'assets/images/basketball.svg' },
    { id: '4', title: 'Find', image: 'assets/images/find.svg' }
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
      image: 'assets/images/pizza.svg',
      label: 'Win By Playing A Game'
    }
  ];

  currentBannerIndex = 1;
  totalBanners = 5;

  constructor() { }

  ngOnInit(): void {
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

  onBottomNavClick(navItem: string): void {
    console.log('Bottom nav clicked:', navItem);
  }
}
