import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PasswordComponent } from './password/password.component';
import { FingerprintComponent } from './fingerprint/fingerprint.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'password', pathMatch: 'full' },
  { path: 'password', component: PasswordComponent },
  { path: 'fingerprint', component: FingerprintComponent }
];

@NgModule({
  declarations: [
    PasswordComponent,
    FingerprintComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProfileSetupModule { }
