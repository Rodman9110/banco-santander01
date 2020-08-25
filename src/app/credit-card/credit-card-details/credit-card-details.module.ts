import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardDetailsRoutingModule } from './credit-card-details-routing.module';
import { CreditCardDetailsComponent } from './credit-card-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CreditCardDetailsComponent],
  imports: [
    CommonModule,
    CreditCardDetailsRoutingModule,
    SharedModule
  ]
})
export class CreditCardDetailsModule { }
