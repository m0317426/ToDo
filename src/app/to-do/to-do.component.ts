import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

 //initializing an array to receive the data from the service
 public todos = []

 //constructor with DI "consuming" the todo service
constructor(private todoService: TodoService) { }

ngOnInit(): void {
  //calling the data from the service into the local array
  this.todos = this.todoService.getOnlyTodos();
}

toDoChecked(todo){
this.todoService.flipDoneSwitch(todo);  
}
}