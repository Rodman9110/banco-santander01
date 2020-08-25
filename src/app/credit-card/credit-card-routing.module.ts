import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditCardComponent } from './credit-card.component';

const routes: Routes = [
  { path: '', component: CreditCardComponent }, 
  { path: ':n_card', loadChildren: () => import('./credit-card-details/credit-card-details.module').then(m => m.CreditCardDetailsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardRoutingModule { }
