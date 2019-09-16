import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'toMenuItems' })
export class ToMenuItemsPipe implements PipeTransform {
  public transform(value: any, ...args: any[]): any {
    return value;
  }

}
