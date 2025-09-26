import { Component, Input, Output, EventEmitter } from '@angular/core';

export type ButtonType = 'primary' | 'secondary' | 'outline' | 'white';
export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {
  @Input() variant: ButtonType = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() disabled: boolean = false;
  @Input() type: string = 'button';
  @Input() fullWidth: boolean = true;
  @Output() onClick = new EventEmitter<Event>();

  get buttonClasses(): string {
    const classes = ['btn', `btn-${this.variant}`];
    
    if (this.size !== 'medium') {
      classes.push(`btn-${this.size}`);
    }
    
    if (this.fullWidth) {
      classes.push('btn-full-width');
    }
    
    return classes.join(' ');
  }
}
