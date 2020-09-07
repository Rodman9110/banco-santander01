import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsListRoutingModule } from './contacts-list-routing.module';
import { ContactsListComponent } from './contacts-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ContactsListComponent],
  imports: [
    CommonModule,
    ContactsListRoutingModule,
    SharedModule
  ]
})
export class ContactsListModule { }
