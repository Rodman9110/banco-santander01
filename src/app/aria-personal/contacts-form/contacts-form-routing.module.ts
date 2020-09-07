import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsFormComponent } from './contacts-form.component';

const routes: Routes = [{ path: '', component: ContactsFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsFormRoutingModule { }
