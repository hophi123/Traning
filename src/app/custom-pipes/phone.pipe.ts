import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any): any {
    value = value.trim();
    const value1 = value.substring(0,4);
    const value2 = value.substring(4,7);
    const value3 = value.substring(7,10);
    const stringArray = [value1, value2, value3];
    return stringArray.join(".")
  }

}
