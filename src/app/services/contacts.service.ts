import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  URL_GET_CONTACTS_USER = 'http://localhost:8081/contacts/getContactsUser'; 
  URL_POST_ADD_CONTACT ='http://localhost:8081/contacts/postAddContact';

  constructor(private http: HttpClient) { }

  public getContactsUser$(data){
    const url = this.URL_GET_CONTACTS_USER+"/"+data;
    console.log(url);
    return this.http.get<any[]>(url);
  }

  public postAddContact$(data){
    const url = this.URL_POST_ADD_CONTACT;
    console.log(url);
    return this.http.post<any>(url,data);

  }
}
