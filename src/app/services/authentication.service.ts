import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }



  getToken() {
    return localStorage.getItem("accessToken");
  }
  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }




  logoutUser(): void {
    let accessToken = localStorage.getItem("accessToken");
    // const url_api = `http://localhost:8081/api/logout?access_token=${accessToken}`;
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    // return this.http.post<UserInterface>(url_api, { headers: this.headers });
    
  }




}
