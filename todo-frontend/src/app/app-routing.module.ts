import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoPageComponent } from './features/todos/pages/todo-page/todo-page.component';
import { LoginPageComponent } from './core/auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './core/auth/pages/register-page/register-page.component';

const routes: Routes = [
  { path: 'todos', component: TodoPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
