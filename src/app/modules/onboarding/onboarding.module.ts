import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OnboardingComponent } from './onboarding.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: OnboardingComponent }
];

@NgModule({
  declarations: [
    OnboardingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class OnboardingModule { }
