import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';

@NgModule({
  declarations: [
    CustomButtonComponent,
    CustomInputComponent,
    NavBarComponent,
    PaginationComponent,
    SocialLoginComponent,
    BottomNavigationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CustomButtonComponent,
    CustomInputComponent,
    NavBarComponent,
    PaginationComponent,
    SocialLoginComponent,
    BottomNavigationComponent
  ]
})
export class SharedModule { }
