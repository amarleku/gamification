import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface FavoriteOffer {
  id: string;
  title: string;
  description?: string;
  price: string;
  image: string;
  categoryIcon: string;
  rating: number;
  isFavorite: boolean;
}

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favoriteOffers: FavoriteOffer[] = [
    {
      id: '1',
      title: 'Dyson AirWrap',
      description: 'Lorem ipsum dolor sit amet, consectetur...',
      price: '$10.00',
      image: 'assets/images/backetbakk.png',
      categoryIcon: 'assets/icons/console.png',
      rating: 5.0,
      isFavorite: true
    },
    {
      id: '2',
      title: 'Happy Hour',
      description: 'Lorem ipsum dolor sit amet, consectetur...',
      price: '$5.00',
      image: 'assets/images/bowling.jpg',
      categoryIcon: 'assets/icons/lounge.png',
      rating: 4.5,
      isFavorite: false
    },
    {
      id: '3',
      title: 'First Class Ticket',
      description: 'Lorem ipsum dolor sit amet, consectetur...',
      price: '$20.00',
      image: 'assets/images/onboard.png',
      categoryIcon: 'assets/icons/plane.png',
      rating: 4.0,
      isFavorite: true
    },
    {
      id: '4',
      title: 'Play Station 6',
      description: 'Lorem ipsum dolor sit amet, consectetur...',
      price: '$10.00',
      image: 'assets/images/tic-tac.png',
      categoryIcon: 'assets/icons/console.png',
      rating: 2.5,
      isFavorite: true
    },
    {
      id: '5',
      title: 'Burger & Fries',
      price: '$10.00',
      image: 'assets/images/Photo Pizza.png',
      categoryIcon: 'assets/icons/fastfood.png',
      rating: 4.0,
      isFavorite: true
    },
    {
      id: '6',
      title: 'RYANAIR',
      price: '$15.00',
      image: 'assets/images/onboard.png',
      categoryIcon: 'assets/icons/plane.png',
      rating: 3.5,
      isFavorite: true
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBackClick(): void {
    // Navigate back or emit event
    window.history.back();
  }

  onOfferClick(offer: FavoriteOffer): void {
    console.log('Favorite offer clicked:', offer);
    // Handle offer click - navigate to details or add to cart
  }

  onFavoriteToggle(offer: FavoriteOffer): void {
    offer.isFavorite = !offer.isFavorite;
    console.log('Favorite toggled for:', offer.title, offer.isFavorite);
    
    // If unfavorited, remove from favorites list
    if (!offer.isFavorite) {
      this.favoriteOffers = this.favoriteOffers.filter(fav => fav.id !== offer.id);
    }
  }

  onBottomNavClick(navItemId: string): void {
    // Navigation is handled by the bottom navigation component itself
    console.log('Bottom nav clicked:', navItemId);
  }
}
