import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  formData1:any;
  ngOnInit(){
    this.formData1=new FormGroup({
      firstname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      lastname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      password:new FormControl('',[Validators.required,Validators.maxLength(5)]),
      email:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]@gmail.com')]),
      contact:new FormControl('',[Validators.required,Validators.pattern('^\\d{10}$')])

    })}
    onClickSubmit(){
      console.log(this.formData1.value);
    }
    get firstname(){
      return this.formData1.get('firstname');
    }
    get lastname(){
      return this.formData1.get('lastname');
    }

    get password(){
      return this.formData1.get('password')
    }

    get email(){
      return this.formData1.get('email')
    }

    get contact(){
      return this.formData1.get('contact')
    }
  }



function onClickSubmit() {
  throw new Error('Function not implemented.');
}

function username() {
  throw new Error('Function not implemented.');
}

function password() {
  throw new Error('Function not implemented.');
}

