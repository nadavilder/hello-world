import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fisrtLetterToUpper',
  standalone: true
})
export class FisrtLetterToUpperPipe implements PipeTransform {

  transform(name:string): unknown {
    return   (name.charAt(0).toUpperCase()+ name.slice(1))
  }

}
