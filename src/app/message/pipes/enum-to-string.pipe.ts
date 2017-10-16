import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToString'
})
export class EnumToStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(args, value);
    return args[value].toLowerCase();
  }

}
