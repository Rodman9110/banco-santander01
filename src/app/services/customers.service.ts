import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  URL_GET_CUSTOMER = 'http://localhost:8081/customers/getCustomer'; 
  URL_REGISTER_CUSTOMER = 'http://localhost:8081/customers/postAddRegisterCustomer';


  constructor(private http: HttpClient) { }

  public getCustomer$(data){
    const url = this.URL_GET_CUSTOMER+"/"+data;
    console.log(url);
    return this.http.get<any>(url);
  }

  public postAddRegisterCustomer$(data){
    const url = this.URL_REGISTER_CUSTOMER;
    console.log(url);
    return this.http.post<any>(url,data);

  }


}
