import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  token: any;
  contacts$: Observable<any[]>;
  constructor(
    private contactsService: ContactsService,
    private authentication: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.token = this.authentication.getToken();
    this.contacts$ = this.contactsService.getContactsUser$(this.token);
  }

}
