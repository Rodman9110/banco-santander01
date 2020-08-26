import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SofiaRoutingModule } from './sofia-routing.module';
import { SofiaComponent } from './sofia.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SofiaComponent],
  imports: [
    CommonModule,
    SofiaRoutingModule,
    SharedModule
  ]
})
export class SofiaModule { }
