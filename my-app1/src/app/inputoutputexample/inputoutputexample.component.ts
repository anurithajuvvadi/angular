import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inputoutputexample',
  templateUrl: './inputoutputexample.component.html',
  styleUrls: ['./inputoutputexample.component.css']
})
export class InputoutputexampleComponent {
  @Input() item!:string;
  outputstring="hello this is primpro";
  @Output() myoutput=new EventEmitter<string>();
  senddata(){
    this.myoutput.emit(this.outputstring);

  }


}
