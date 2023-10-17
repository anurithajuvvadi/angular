import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent  {
  mybool=true;
  currentitem="hello anuritha";
 
  
  appname="anuritha";
  getdata(value:string){
    console.log(value);
  }
  
  public image="./assets/Screenshot (10).png";
  getname(){
    alert("hi");
  }
  

}
