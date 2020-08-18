import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form-company',
  templateUrl: './register-form-company.component.html',
  styleUrls: ['./register-form-company.component.css']
})
export class RegisterFormCompanyComponent implements OnInit {

  @Input() countries;
  public registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {

    this.registerForm = this.formBuilder.group({
      name_company:['',Validators.required],
      cif:['', Validators.required], 
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
     
 }

  BackLogin(){
    this.router.navigate(['/login']);

  }


}
