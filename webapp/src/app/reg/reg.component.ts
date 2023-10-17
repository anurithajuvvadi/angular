import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {
  formData2:any;
  ngOnInit(){
    this.formData2=new FormGroup({
      firstname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      lastname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      password:new FormControl('',[Validators.required,Validators.maxLength(5)]),
      email:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]@gmail.com')]),
      contact:new FormControl('',[Validators.required,Validators.pattern('^\\d{10}$')])

    })}
    onClickSubmit(){
      console.log(this.formData2.value);
    }
    get firstname(){
      return this.formData2.get('firstname');
    }
    get lastname(){
      return this.formData2.get('lastname');
    }

    get password(){
      return this.formData2.get('password')
    }

    get email(){
      return this.formData2.get('email')
    }

    get contact(){
      return this.formData2.get('contact')
    }
  }





