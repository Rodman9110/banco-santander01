import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardRoutingModule } from './credit-card-routing.module';
import { CreditCardComponent } from './credit-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CreditCardComponent],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    SharedModule
  ]
})
export class CreditCardModule { }
