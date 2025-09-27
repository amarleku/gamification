import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Launch/Splash Screen
  { path: '', redirectTo: '/launch', pathMatch: 'full' },
  { path: 'launch', loadChildren: () => import('./modules/launch/launch.module').then(m => m.LaunchModule) },
  
  // Onboarding
  { path: 'onboarding', loadChildren: () => import('./modules/onboarding/onboarding.module').then(m => m.OnboardingModule) },
  
  // Authentication
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  
  // Profile Setup
  { path: 'profile-setup', loadChildren: () => import('./modules/profile-setup/profile-setup.module').then(m => m.ProfileSetupModule) },
  
  // Dashboard
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  
  // Default redirect
  { path: '**', redirectTo: '/launch' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
