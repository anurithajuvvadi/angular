import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {
  id:any;
  constructor(private route:ActivatedRoute){

    console.log(this.route.snapshot.params)
    this.id=this.route.snapshot.params['id'];
  }

}
