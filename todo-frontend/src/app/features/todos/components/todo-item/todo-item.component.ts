import { Component, Input, input, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { GetTodoService } from '../../services/get-todo.service';

@Component({
  selector: 'app-todo-item',
  standalone: false,

  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Input() id!: string;

  constructor(private todoService: GetTodoService) {}

  deleteTodo() {
    this.todoService
      .deleteTodo(this.id)
      .subscribe((response) => console.log('item eliminando', response));
  }
}
