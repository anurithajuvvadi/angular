import { Component } from '@angular/core';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent {
  uname="";
  name:string | undefined;
  onClickSubmit(
    result:{
      username:string;
      password:string;
      firstname:string;
      lastname:string;
      gender:string;
    })
    {
   console.log(result.username);
   console.log(result.password);
   console.log(result.firstname);
   console.log(result.lastname);
   console.log(result.gender);

  
}


}
