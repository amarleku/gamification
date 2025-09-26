import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() title: string = '';
  @Input() showBackButton: boolean = true;
  @Output() onBackClick = new EventEmitter<void>();
}
