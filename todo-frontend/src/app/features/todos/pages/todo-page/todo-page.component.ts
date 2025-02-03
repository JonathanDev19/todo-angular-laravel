import { Component } from '@angular/core';
import { GetTodoService } from '../../services/get-todo.service';

@Component({
  selector: 'app-todo-page',
  standalone: false,

  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css',
})
export class TodoPageComponent {
  constructor(private todoService: GetTodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe({});
  }
}
