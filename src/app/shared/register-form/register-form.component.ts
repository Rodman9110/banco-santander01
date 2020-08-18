import { Component, OnInit, Input } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpLoginService } from 'src/app/services/http-login.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  @Input() error: string | null;
  @Input() countries;
  public registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private customersService: CustomersService,
    private router: Router,
    private httpLogin: HttpLoginService,
  ) { 
    
    this.registerForm = this.formBuilder.group({
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      password:['', Validators.required],
      email:['', Validators.required],
      dni:['', Validators.required], 
      direction:['', Validators.required],  
      id_nationality:['', Validators.required],
     });




  }

  ngOnInit(): void {
    console.log(this.countries);
  }

  
  ClickSaveRegistry(){
     console.log(this.registerForm.value);
     this.customersService.postAddRegisterCustomer$(this.registerForm.value)
     .subscribe(
        data =>{
          
          if (data == false){ 
            error => console.log(error)
            this.error = "DNI already registered."
          }
          // if (data == "false email"){ 
          //   error => console.log(error)
          //   this.error = "Email already registered."
          // }
          else{
            console.log("Else");
            this.httpLogin.postAddLogin("dni",this.registerForm.value.dni,this.registerForm.value.password).subscribe();
            this.router.navigate(['login']);
          }
        },
      );
  }
  BackLogin(){
    this.router.navigate(['/login']);

  }

}
