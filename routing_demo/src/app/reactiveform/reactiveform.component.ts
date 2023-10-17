import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
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

}
