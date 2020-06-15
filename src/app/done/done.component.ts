import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/todo.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
//initializing an array to receive the data from the service
public todos = [];

//constructor with DI "consuming" the todo service
constructor(private todoService: TodoService) { }

ngOnInit(): void {
  //calling the data from the service into the local array
  this.todos = this.todoService.getOnlyDones();
}

}