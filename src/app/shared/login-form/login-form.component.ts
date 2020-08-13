import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input() error: string | null;
  public loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) { 
    
    this.loginForm = this.formBuilder.group({
      dni:['', Validators.required],
      password:['', Validators.required] 
     });
  }

  ngOnInit(): void {
  }

  ClickVerificationLogin(){
    

  }
  PageRegister(){
    
  }

}
