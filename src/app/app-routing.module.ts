import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'aria-personal', loadChildren: () => import('./aria-personal/aria-personal.module').then(m => m.AriaPersonalModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'buzon', loadChildren: () => import('./buzon/buzon.module').then(m => m.BuzonModule) },
  { path: 'sofia', loadChildren: () => import('./sofia/sofia.module').then(m => m.SofiaModule) },
  { path: 'bank_operations', loadChildren: () => import('./bank-operations/bank-operations.module').then(m => m.BankOperationsModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'credit_card', loadChildren: () => import('./credit-card/credit-card.module').then(m => m.CreditCardModule) },
  { path: 'information', loadChildren: () => import('./information/information.module').then(m => m.InformationModule) },
  { path: 'tableBankOperacions', loadChildren: () => import('./table-bank-operations/table-bank-operations.module').then(m => m.TableBankOperationsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
