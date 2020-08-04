import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AriaPersonalRoutingModule } from './aria-personal-routing.module';
import { AriaPersonalComponent } from './aria-personal.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AriaPersonalComponent],
  imports: [
    CommonModule,
    AriaPersonalRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class AriaPersonalModule { }
