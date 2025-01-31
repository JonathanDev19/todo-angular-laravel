import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoShellComponent } from './components/todo-shell/todo-shell.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 




@NgModule({
  declarations: [
    TodoFormComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoShellComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodoShellComponent
  ]
})
export class TodosModule { }
