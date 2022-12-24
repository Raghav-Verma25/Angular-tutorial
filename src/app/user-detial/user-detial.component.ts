import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-user-detial',
  templateUrl: './user-detial.component.html',
  styleUrls: ['./user-detial.component.css']
})
export class UserDetialComponent {
  @ Input() item2 ="";
  @ Input() item3 :{name:string , email:string} = {name:""  ,email:""}
}
