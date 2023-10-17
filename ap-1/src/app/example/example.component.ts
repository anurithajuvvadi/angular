import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  myvalue=true;
  appname="hrlo this is primepro";
  x="helo";
  getdata(value:string){
    console.log(value);
  }
  clicked(){
    alert("popup message");
  }
  birthday=new Date(1999,6,17);
  

}
