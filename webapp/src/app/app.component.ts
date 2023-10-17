import { Component, OnInit } from '@angular/core';
import { Test1Service } from './test1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapp';
 /* constructor(private serv:Test1Service){  
}
x:any;
ngOnInit(){
  this.x=this.serv.display();
}*/
}
