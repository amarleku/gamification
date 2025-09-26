import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LaunchComponent } from './launch.component';

const routes: Routes = [
  { path: '', component: LaunchComponent }
];

@NgModule({
  declarations: [
    LaunchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LaunchModule { }
