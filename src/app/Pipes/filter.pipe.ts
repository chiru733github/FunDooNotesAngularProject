import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterNote:string){
    if(filterNote===''){
      return value;
    }
    const notes=[];
    for(const note of value){
      if(note.title.includes(filterNote) || note.description.includes(filterNote)){
        notes.push(note);
      }
    }
    return notes;
  }

}
