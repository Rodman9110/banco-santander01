import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SofiaRoutingModule } from './sofia-routing.module';
import { SofiaComponent } from './sofia.component';


@NgModule({
  declarations: [SofiaComponent],
  imports: [
    CommonModule,
    SofiaRoutingModule
  ]
})
export class SofiaModule { }
