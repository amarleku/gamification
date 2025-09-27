import { Component, Output, EventEmitter } from '@angular/core';

export type SocialProvider = 'google' | 'facebook' | 'apple';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss']
})
export class SocialLoginComponent {
  @Output() socialLogin = new EventEmitter<SocialProvider>();

  onSocialLogin(provider: SocialProvider): void {
    this.socialLogin.emit(provider);
  }

}
