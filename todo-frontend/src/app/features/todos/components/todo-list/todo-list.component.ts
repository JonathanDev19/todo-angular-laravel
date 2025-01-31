import { Component, OnInit } from '@angular/core';
import { GetTodoService } from '../../services/get-todo.service';
import { Todo } from '../../models/todo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{

  todos$!: Observable<Todo[]>;

  constructor(private todoService: GetTodoService) {}

  ngOnInit() {
    this.todos$ = this.todoService.showTodos();
    this.todoService.getTodos().subscribe()
  }

}
