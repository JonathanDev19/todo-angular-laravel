import { Component } from '@angular/core';
import { GetTodoService } from '../../services/get-todo.service';
import { CreateTodoDTO } from '../../models/todo.model';

@Component({
  selector: 'app-todo-form',
  standalone: false,

  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  inputValue: string = '';
  textAreaValue: string = '';

  constructor(private apiService: GetTodoService) {}

  createTodo() {
    const todo: CreateTodoDTO = {
      title: this.inputValue,
      description: this.textAreaValue,
      completed: false,
    };

    this.apiService.createTodo(todo).subscribe();

    this.inputValue = '';
    this.textAreaValue = '';
  }
}
