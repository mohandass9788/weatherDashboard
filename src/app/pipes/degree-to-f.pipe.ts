import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degreeToF',
  standalone: true
})
export class DegreeToFPipe implements PipeTransform {

  transform(value: string, ...args: any[]) {
    if (args[0]) {
      return (+value.split('°')[0] * 9 / 5) + 32 + 'F';
    } else {
      return value;
    }
  }

}
