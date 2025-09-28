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
    { id: 'home', label: 'Home', icon: 'assets/bottom-nav/home.png', route: '/dashboard' },
    { id: 'gift', label: 'Gift', icon: 'assets/bottom-nav/gift.png', route: '/gift' },
    { id: 'heart', label: 'Favorites', icon: 'assets/bottom-nav/heart.png', route: '/favorites' },
    { id: 'list', label: 'List', icon: 'assets/bottom-nav/todo.png', route: '/list' },
    { id: 'headphones', label: 'Support', icon: 'assets/bottom-nav/support.png', route: '/support' }
  ];

  constructor(private router: Router) {}

  onNavItemClick(navItem: NavItem): void {
    this.activeItem = navItem.id;
    this.navItemClick.emit(navItem.id);
    
    // Navigate to the route
    this.router.navigate([navItem.route]);
  }
}
