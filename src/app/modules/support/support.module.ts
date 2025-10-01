import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SupportComponent } from './support.component';
import { SharedModule } from '../../shared/shared.module';

const routes = [
  { path: '', component: SupportComponent }
];

@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SupportModule { }
