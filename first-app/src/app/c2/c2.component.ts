import { Component, ViewEncapsulation, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class C2Component {
  formData:any;
  ngOnInit(){
    this.formData=new FormGroup({
      username:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      password:new FormControl('',[Validators.required,Validators.maxLength(5)])

    })}
    onClickSubmit(){
      console.log(this.formData.value);
    }
    get username(){
      return this.formData.get('username');
    }
    get password(){
      return this.formData.get('password')
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

