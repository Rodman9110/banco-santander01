import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankOperationsService {

  
  URL_GET_BANK_OPERATIONS_CUSTOMER = 'http://localhost:8081/bank_operations/getBankOperationsCustomer'; 
  URL_GET_LAST_BANK_OPERATIONS = 'http://localhost:8081/bank_operations/getLastBankOperations';

  constructor(private http: HttpClient) { }

  public getBankOperationsCustomer$(data){
    const url = this.URL_GET_BANK_OPERATIONS_CUSTOMER+"/"+data;
    console.log(url);
    return this.http.get<any>(url);
  }
  public getLastBankOperations$(data){
    const url = this.URL_GET_LAST_BANK_OPERATIONS+"/"+data;
    console.log(url);
    return this.http.get<any>(url);
  }
}
