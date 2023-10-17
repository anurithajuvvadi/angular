import { Component } from '@angular/core';
import { UsersserviceService } from '../usersservice.service';

@Component({
  selector: 'app-httpexample',
  templateUrl: './httpexample.component.html',
  styleUrls: ['./httpexample.component.css']
})
export class HttpexampleComponent {

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
