import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(array: Array<any>, args?: any): Array<any> {
    console.log("Tr: "+array);
     return [].slice.call(array).sort((a, b) => {
       
       if (a[args.property] < b[args.property]) {
         return -1;
       }
       else if (a[args.property] > b[args.property]) {
         return 1;
       }
       else {
         return 0;
       }
     });
    /*return array.sort(function (a, b) {
      if (a[args.property] < b[args.property]) {
        return -1 * args.order;
      }
      else if (a[args.property] > b[args.property]) {
        return 1 * args.order;
      }
      else {
        return 0;
      }
    });*/
  }

}
