import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersserviceService {

  constructor(private http:HttpClient) {}
    url="https://api.openweathermap.org/data/2.5/weather?lat=17.50&lon=78.50&appid=f66e03e34d3d4a8dad7ce52dec2f3a68";

  
   getdata(){
    return this.http.get(this.url);
   }
   saveusers(data:any){
    return this.http.post(this.url,data);

   }
}
