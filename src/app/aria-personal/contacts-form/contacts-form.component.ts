import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.css']
})
export class ContactsFormComponent implements OnInit {

  token$: any;

  
  constructor(
    private contactsService: ContactsService,
    private authentication: AuthenticationService,
    ) { }

  ngOnInit(): void {
    this.token$ = this.authentication.getToken();
  }

  SaveContact(contact: any){
    console.log(contact);
    this.contactsService.postAddContact$(contact).subscribe();
    
  }

}
