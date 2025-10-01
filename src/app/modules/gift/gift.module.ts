import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GiftComponent } from './gift.component';
import { SharedModule } from '../../shared/shared.module';

const routes = [
  { path: '', component: GiftComponent }
];

@NgModule({
  declarations: [
    GiftComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class GiftModule { }
