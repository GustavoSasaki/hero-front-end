import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getBgHeroName'
})
export class GetBgHeroNamePipe implements PipeTransform {

  transform(value?: string)  {
    if(!value) return `bg-red-700`
    return `bg-${value}-700`;
  }

}
