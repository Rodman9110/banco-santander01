import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-contacts-form-shared',
  templateUrl: './contacts-form-shared.component.html',
  styleUrls: ['./contacts-form-shared.component.css']
})
export class ContactsFormSharedComponent implements OnInit {

  
  public ContactsForm: FormGroup;
  token: any;
  @Output() SaveContactsEmit = new EventEmitter<any>();

  constructor( 
    private formBuilder: FormBuilder,
    private contactsService: ContactsService,
    private authentication: AuthenticationService,
    ) {

    this.token = this.authentication.getToken();
    this.ContactsForm = this.formBuilder.group({      
      id:['', Validators.required],
      user_code_receptor:[this.token, Validators.required],
      name_contact:['', Validators.required], 
      account:['', Validators.required], 
     });
   }

  ngOnInit(): void {
    
  }

  ClickSaveContacts(){
    console.log(this.ContactsForm.value);
    this.SaveContactsEmit.emit(this.ContactsForm.value);


  }

}
