import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpLoginService } from 'src/app/services/http-login.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MongoDBService } from 'src/app/services/mongo-db.service';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input() error: string | null;
  state: any ="open session";
  public loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private httpLogin: HttpLoginService,
    private authentication: AuthenticationService,
    private mongoDBService: MongoDBService
       
  ) { 
    
    this.loginForm = this.formBuilder.group({
      type:['', Validators.required], 
      user_code:['', Validators.required],
      password:['', Validators.required]   
     });
  }

  ngOnInit(): void {
  }

 
  ClickVerificationLogin(){

    this.httpLogin.loginVerification(this.loginForm.value)
    .subscribe(data =>{
      if (data == null){       
        error => console.log(error)
        this.error = "Wrong username or password."
      }
      else{
        this.mongoDBService.postSessionRegistration$(data.user_code,this.state).subscribe();
        console.log(data.user_code);
        this.authentication.setToken(data.user_code);
        this.router.navigate(['']);
      }
    },
    );
  }
  PageRegister(){
    this.router.navigate(['/register']);

  }

}
