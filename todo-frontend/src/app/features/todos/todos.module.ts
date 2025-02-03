import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';

@NgModule({
  declarations: [
    TodoFormComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoPageComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [TodoPageComponent],
})
export class TodosModule {}
