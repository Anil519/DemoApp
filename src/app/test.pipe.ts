import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(title:string, person:any, wish:string): string {
    console.log(person.name)
    console.log(title)
    if(person.Role=="Developer")
    {
      return `Hello ${person.Role} ${wish}`
    }
    else{
      return "No Data"
    }
  }

}
