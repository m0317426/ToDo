import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoneComponent } from './done/done.component';
import { ToDoComponent } from './to-do/to-do.component';
import { Todo } from './services/todo.service/todo.service.component';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    DoneComponent,
    ToDoComponent,
    Todo.ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
