import { Pipe, PipeTransform } from '@angular/core';
import {Users} from "../../models/users";

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(value: Users[], filterText?: any): Users[] {
    filterText = filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((p:Users)=>p.name
      .toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
