import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  route: string;
}

/**
 * Bottom Navigation Component
 * 
 * A reusable bottom navigation component that can be used across all pages.
 * 
 * Usage:
 * <app-bottom-navigation 
 *   [activeItem]="'home'"
 *   (navItemClick)="onBottomNavClick($event)">
 * </app-bottom-navigation>
 * 
 * @Input activeItem - The currently active navigation item ID
 * @Output navItemClick - Emits the clicked navigation item ID
 */
@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss']
})
export class BottomNavigationComponent {
  @Input() activeItem: string = 'home';
  @Output() navItemClick = new EventEmitter<string>();

  navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: '🏠', route: '/dashboard' },
    { id: 'gift', label: 'Gift', icon: '🎁', route: '/gift' },
    { id: 'heart', label: 'Favorites', icon: '❤️', route: '/favorites' },
    { id: 'list', label: 'List', icon: '📋', route: '/list' },
    { id: 'headphones', label: 'Audio', icon: '🎧', route: '/audio' }
  ];

  constructor(private router: Router) {}

  onNavItemClick(navItem: NavItem): void {
    this.activeItem = navItem.id;
    this.navItemClick.emit(navItem.id);
    
    // Navigate to the route
    this.router.navigate([navItem.route]);
  }
}
