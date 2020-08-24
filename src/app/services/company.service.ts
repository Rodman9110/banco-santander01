import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  URL_GET_COMPANY = 'http://localhost:8081/company/getCompany'; 
  URL_REGISTER_CUSTOMER = 'http://localhost:8081/company/postAddRegisterCustomer';

  constructor(private http: HttpClient) { }

  public getCompany$(data){
    const url = this.URL_GET_COMPANY+"/"+data;
    console.log(url);
    return this.http.get<any>(url);
  }
  public postAddRegisterCompany$(data){
    const url = this.URL_REGISTER_CUSTOMER;
    console.log(url);
    return this.http.post<any>(url,data);

  }
}
