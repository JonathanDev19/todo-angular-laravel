import { Component, OnInit } from '@angular/core';
import { GetTodoService } from '../../services/get-todo.service';

@Component({
  selector: 'app-todo-shell',
  standalone: false,
  
  templateUrl: './todo-shell.component.html',
  styleUrl: './todo-shell.component.css'
})
export class TodoShellComponent {

  constructor(private todoService: GetTodoService) {}

  ngOnInit(): void {

    this.todoService.getTodos().subscribe({
      
    })
  } 

}
