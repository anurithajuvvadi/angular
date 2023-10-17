import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: Date){
    const currentyear=new Date().getFullYear();
    const dob=value.getFullYear();
    const age=currentyear-dob;
    return age;



  }
  }


