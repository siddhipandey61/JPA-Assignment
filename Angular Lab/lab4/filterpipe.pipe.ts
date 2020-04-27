import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, searchTerm:any): any {
    if(value.length===0){
      return value
    }
    return value.filter(function(searchx){
    return searchx.empName.indexOf(searchTerm) > -1
    })
  }

}
