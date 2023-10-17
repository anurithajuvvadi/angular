import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  y!: string;
  outputstring="hello this is jfs course";
  @Output() myoutput=new EventEmitter<string>();
  senddata(){
    this.myoutput.emit(this.outputstring);
  }

}
