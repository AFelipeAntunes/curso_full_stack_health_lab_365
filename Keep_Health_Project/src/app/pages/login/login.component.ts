import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string | undefined;
  password: string | undefined;

  constructor(private router: Router) {}

  login() {
    let users = localStorage.getItem('users');
    if (users) {
      let parsedUsers = JSON.parse(users);
      let user = parsedUsers.find((user: { email: string | undefined; password: string | undefined; }) => user.email === this.email && user.password === this.password);

      if (user) {
        // Redireciona para a home se o usuário estiver cadastrado
        this.router.navigate(['/home']);
      } else {
        // Exibe um alerta se o usuário ou senha forem inválidos
        alert('Usuário ou senha inválidos');
      }
    }
  }

  forgotPassword() {
    let users = localStorage.getItem('users');
    if (users) {
      let parsedUsers = JSON.parse(users);
      let user = parsedUsers.find((user: { email: string | undefined; }) => user.email === this.email);

      if (user) {
        // Altera a senha para a senha padrão e avisa o usuário
        user.password = 'a1b2c4d4';
        localStorage.setItem('users', JSON.stringify(parsedUsers));
        alert('Sua senha foi alterada para a1b2c4d4. Por favor, prossiga utilizando essa senha.');
      } else {
        // Exibe um alerta se o email não estiver cadastrado
        alert('Email não cadastrado');
      }
    }
  }

  register() {
    // Redireciona para a tela de cadastro
    this.router.navigate(['/cadastro']);
  }
}
