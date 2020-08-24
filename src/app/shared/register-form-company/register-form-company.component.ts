import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { HttpLoginService } from 'src/app/services/http-login.service';

@Component({
  selector: 'app-register-form-company',
  templateUrl: './register-form-company.component.html',
  styleUrls: ['./register-form-company.component.css']
})
export class RegisterFormCompanyComponent implements OnInit {

  @Input() error: string | null;
  @Input() countries;
  public registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private companyService: CompanyService,
    private httpLogin: HttpLoginService,
  ) {

    this.registerForm = this.formBuilder.group({
      name:['',Validators.required],
      cif:['', Validators.required], 
      type_company:['', Validators.required],       
      password:['', Validators.required],
      email:['', Validators.required],      
      direction:['', Validators.required],  
      id_nationality:['', Validators.required],
     });

   }

  ngOnInit(): void {
  }

  ClickSaveRegistry(){
    console.log(this.registerForm.value);
    this.companyService.postAddRegisterCompany$(this.registerForm.value)
    .subscribe(data =>{
      
      if (data == false){ 
        error => console.log(error)
        this.error = "CIF already registered."
      }
      else{
        console.log("Else");
        this.httpLogin.postAddLogin("cif",this.registerForm.value.cif,this.registerForm.value.password).subscribe();
        this.router.navigate(['login']);
      }
    }     
    );   
 }

  BackLogin(){
    this.router.navigate(['/login']);

  }


}
