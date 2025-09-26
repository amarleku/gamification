import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';

@NgModule({
  declarations: [
    CustomButtonComponent,
    CustomInputComponent,
    NavBarComponent,
    PaginationComponent,
    SocialLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomButtonComponent,
    CustomInputComponent,
    NavBarComponent,
    PaginationComponent,
    SocialLoginComponent
  ]
})
export class SharedModule { }
