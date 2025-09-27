import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gamification';
  currentRoute = '';

  constructor(private router: Router) {
    // Listen to route changes to update active navigation item
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentRoute = (event as NavigationEnd).url;
      });
  }

  getCurrentActiveItem(): string {
    // Map routes to navigation items
    if (this.currentRoute.includes('/dashboard')) return 'home';
    if (this.currentRoute.includes('/gift')) return 'gift';
    if (this.currentRoute.includes('/favorites')) return 'heart';
    if (this.currentRoute.includes('/list')) return 'list';
    if (this.currentRoute.includes('/audio')) return 'headphones';
    
    // Default to home if no match
    return 'home';
  }

  onBottomNavClick(navItem: string): void {
    console.log('Bottom nav clicked:', navItem);
    // The navigation is handled by the bottom navigation component itself
  }
}
