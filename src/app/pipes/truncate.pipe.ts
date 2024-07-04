import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    const limit = 30;
    return value.length > limit ? value.substring(0, limit).concat("...") : value;
  }

}
