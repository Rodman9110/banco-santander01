import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(private http: HttpClient) { }

  URL_GET_BANK_ACCOUNT = 'http://localhost:8081/bank_account/getBankAccounts'; 

  public getBankAccounts$(data){
    const url = this.URL_GET_BANK_ACCOUNT+"/"+data;
    console.log(url);
    return this.http.get<any>(url);
  }


}
