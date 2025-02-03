import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: false,

  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(loginForm: any) {
    if (loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = null;

      this.authService.login(loginForm.value).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/todos']);
        },
        error: (err) => {
          this.errorMessage = 'Credenciales inválidas. Intenta de nuevo.';
        },
      });
    }
  }
}
