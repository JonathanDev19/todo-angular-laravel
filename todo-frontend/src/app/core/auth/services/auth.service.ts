import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials, LoginResponse } from '../interfaces/auth.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/login';

  constructor(private http: HttpClient) {}

  login(credentials: Credentials): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Revisa si el token está almacenado
  }
}
