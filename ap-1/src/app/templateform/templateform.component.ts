import { Component } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent {
  uname="";
  name:string | undefined;
  onClicksubmit(
    result:{
      username:string;
      password:string;
      gender:string;

    }
  ){
    console.log(result.username);
    console.log(result.password);
    console.log(result.gender);

  }

}
