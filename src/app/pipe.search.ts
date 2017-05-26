import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(pipeData, pipeModifier) {
    return  pipeData.filter((eachItem)=> {
    return  eachItem['description'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
            eachItem['boroughs'].toLowerCase().includes(pipeModifier.toLowerCase());
    });
  }
}
