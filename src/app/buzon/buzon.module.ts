import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuzonRoutingModule } from './buzon-routing.module';
import { BuzonComponent } from './buzon.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BuzonComponent],
  imports: [
    CommonModule,
    BuzonRoutingModule,
    SharedModule
  ]
})
export class BuzonModule { }
