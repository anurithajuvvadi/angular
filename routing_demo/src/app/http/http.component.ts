import { Component } from '@angular/core';
import { UsersserviceService } from '../usersservice.service';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers:[KeyValuePipe]
})
export class HttpComponent {
  Data:any=[];
  constructor(private user:UsersserviceService){
    this.user.getdata().subscribe(data=>{
      console.log(data);
      this.Data=data;
    })
  }

  getuserdata(data:any){
    this.user.saveusers(data).subscribe(result=>{
      console.log(result);
    })
  }


}
