import { Component, HostBinding, HostListener, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit{
  birthday=new Date(2023,3,21);
  title = 'first-app';
  cval="";
  dateToday: (() => string) | undefined;
  name: string | undefined;
  getval(val: any){
    console.warn(val);
    this.cval=val;
  }
  current_item="computer";
  getdata(val:any){
    console.log(val);
  }
  val3="";
  add(val1:any,val2:any){
   this.val3=val1+val2;

  }
  show="true";
  data=["a","b","c"];
  data1=[
    {name:'anu',
     age:21,
     lastname:"juvvadi"

  }

  ]
  
@HostBinding("style.color")textcolor:string | undefined;
@HostBinding("style.font-weight")text:string | undefined;
ngOnInit():void{
  this.service.hello();
  this.textcolor="red";
  this.dateToday=new Date().toDateString;
  this.name="edubridge";
}
@HostListener('click') onClick(): any{
  this.textcolor="blue";
  this.text="bold";

}
@HostListener('mouseover') onMouseOver(): any{
  this.textcolor="green";

}
@HostListener('mouseout') onMouseOut(): any{
  this.textcolor="orange";

}

constructor(private service :TestService){
  service.hello();
}

}
