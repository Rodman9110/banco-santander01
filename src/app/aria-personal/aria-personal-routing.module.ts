import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AriaPersonalComponent } from './aria-personal.component';

const routes: Routes = [
 { path: '', component: AriaPersonalComponent },
 { path: 'contactsForm', loadChildren: () => import('./contacts-form/contacts-form.module').then(m => m.ContactsFormModule) },
 { path: 'contactsList', loadChildren: () => import('./contacts-list/contacts-list.module').then(m => m.ContactsListModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AriaPersonalRoutingModule { }
