import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/launch', pathMatch: 'full' },
  { path: 'launch', loadChildren: () => import('./modules/launch/launch.module').then(m => m.LaunchModule) },
  
  { path: 'onboarding', loadChildren: () => import('./modules/onboarding/onboarding.module').then(m => m.OnboardingModule) },
  
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  
  { path: 'profile-setup', loadChildren: () => import('./modules/profile-setup/profile-setup.module').then(m => m.ProfileSetupModule) },
  
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  
  { path: 'gift', loadChildren: () => import('./modules/gift/gift.module').then(m => m.GiftModule) },
  
  { path: 'favorites', loadChildren: () => import('./modules/favorites/favorites.module').then(m => m.FavoritesModule) },
  
  { path: '**', redirectTo: '/launch' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
