import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FavoritesComponent } from './favorites.component';
import { SharedModule } from '../../shared/shared.module';

const routes = [
  { path: '', component: FavoritesComponent }
];

@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class FavoritesModule { }
