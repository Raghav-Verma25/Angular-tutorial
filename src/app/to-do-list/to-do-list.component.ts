import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  // Todo list
  list:any[] = [];
  addTask(item:string){
    this.list.push({id:this.list.length , name:item});
    console.warn(this.list)
  }
  
  removeTask(id:number){
    console.warn(id);
    this.list=this.list.filter(item => item.id!==id);
  }
 
}
