import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateTodoDTO, Todo } from '../models/todo.model';
import {
  BehaviorSubject,
  catchError,
  Observable,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetTodoService {
  private todos = new BehaviorSubject<Todo[]>([]);
  private apiUrl: string = 'http://127.0.0.1:8000/api/tasks';

  constructor(private http: HttpClient) {}

  showTodos(): Observable<Todo[]> {
    return this.todos.asObservable();
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl).pipe(
      tap((todos) => this.todos.next(todos)), // Actualiza el BehaviorSubject
      catchError((error: HttpErrorResponse) => {
        console.error('Error obteniendo todos', error);
        return throwError(() => new Error('Error al obtener los datos'));
      })
    );
  }

  createTodo(todo: CreateTodoDTO): any {
    return this.http.post<any>(this.apiUrl, todo).pipe(
      tap((response) => console.log('Respuesta de creación:', response)),
      switchMap(() => {
        return this.getTodos();
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error creando todo:', error);
        return throwError(() => new Error('Error al crear el todo'));
      })
    );
  }

  deleteTodo(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
