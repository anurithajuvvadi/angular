import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

   x:any;

f1(z:any){
   this.x=z;
   console.log(this.x*this.x*this.x);
}


  @Input() item="string";
  @Input() sum="";
  constructor(){
//console.log(this.sum);
  }
  outputstring="welcome";
  @Output() outputvariable=new EventEmitter<string>();

  senddata(){
    this.outputvariable.emit(this.outputstring);
  }
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
