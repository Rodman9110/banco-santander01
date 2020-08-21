import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankOperationsService {

  
  URL_GET_BANK_OPERATIONS_CUSTOMER = 'http://localhost:8081/bank_operations/getBankOperationsCustomer'; 
  URL_GET_LAST_BANK_OPERATIONS = 'http://localhost:8081/bank_operations/getLastBalance';
  URL_ADD_BANK_OPERATIONS = 'http://localhost:8081/bank_operations/AddBank_Operation';
  URL_GET_LAST_BALANCE = 'http://localhost:8081/bank_operations/getLastBalance';
  URL_GET_TOTAL_BALANCE = 'http://localhost:8081/bank_operations/getTotalBalance';
  URL_GET_ACCOUNTS_BALANCES ='http://localhost:8081/bank_operations/getAccountBalance';


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

  public AddBankOperation$(data){
    const url = this.URL_ADD_BANK_OPERATIONS;
    // console.log(url);
    return this.http.post<any>(url,data);

  }
  public getLastBalance$(data: any[]){
    const url = this.URL_GET_LAST_BALANCE+"/"+data;
    console.log(data);
    console.log(url);
    return this.http.get<any>(url);
  }

  public getTotalBalance$(data){
    const url = this.URL_GET_TOTAL_BALANCE+"/"+data;
    console.log(url);
    return this.http.get<any>(url);
  }
  public getAccountBalance$(data){
    const url = this.URL_GET_ACCOUNTS_BALANCES+"/"+data;
    console.log(url);
    return this.http.get<any>(url);
  }


}
