import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: false,

  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  emailExists: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  checkEmail(email: string) {
    if (!email) return;

    this.userService.checkEmailExists(email).subscribe({
      next: (response) => {
        this.emailExists = response.exists;
      },
      error: (error) => {
        console.log('Error al verificar el correo: ', error);
      },
    });
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Datos del formulario: ', form.value);
      this.userService.createUser(form.value).subscribe({
        next: (response) => {
          this.router.navigate(['/login']);
        },
      });
    } else {
      console.log('Formulario invalido');
    }
  }
}
