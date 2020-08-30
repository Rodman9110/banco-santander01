import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MongoDBService {

  URL_POST_SESSION_REGISTER ='http://localhost:8090/api/AddSessionRegistration';

  constructor(private http: HttpClient) { }

  public postSessionRegistration$(user_code,state){
    const url = this.URL_POST_SESSION_REGISTER;
    console.log(url,user_code,status);
    return this.http.post<any>(url,{"user_code":user_code,"state":state});
  }
}
