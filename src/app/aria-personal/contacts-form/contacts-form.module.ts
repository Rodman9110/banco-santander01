import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsFormRoutingModule } from './contacts-form-routing.module';
import { ContactsFormComponent } from './contacts-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ContactsFormComponent],
  imports: [
    CommonModule,
    ContactsFormRoutingModule,
    SharedModule
  ]
})
export class ContactsFormModule { }
