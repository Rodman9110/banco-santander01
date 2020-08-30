import { Component, OnInit } from '@angular/core';
import { HttpLoginService } from '../services/http-login.service';
import { AuthenticationService } from '../services/authentication.service';
import { MongoDBService } from '../services/mongo-db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(
    private httpLogin: HttpLoginService,
    private authentication: AuthenticationService,
    private mongoDBService: MongoDBService
  ) { }

  ngOnInit(): void {
  }

}
