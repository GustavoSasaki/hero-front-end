import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getImgUrl'
})
export class GetImgUrlPipe implements PipeTransform {

  transform(id:number): string {
    return `https://dgufziqjubvbckrlwnjj.supabase.co/storage/v1/object/public/hero-back-end/${id}.png`
  }

}
