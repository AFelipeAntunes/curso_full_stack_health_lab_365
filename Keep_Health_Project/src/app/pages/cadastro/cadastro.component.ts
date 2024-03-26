import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  name: string | undefined;
  email: string | undefined;
  birthdate: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;

  constructor(private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    let users = localStorage.getItem('users');
    let parsedUsers = users ? JSON.parse(users) : [];

    let userExists = parsedUsers.some((user: { email: string; }) => user.email === this.email);

    if (userExists) {
      // Exibe um alerta se o email já estiver cadastrado
      alert('Email já cadastrado');
    } else {
      // Adiciona o novo usuário à lista de usuários e salva no localStorage
      parsedUsers.push({ name: this.name, email: this.email, birthdate: this.birthdate, password: this.password });
      localStorage.setItem('users', JSON.stringify(parsedUsers));

      // Redireciona para a home após o cadastro
      this.router.navigate(['/home']);
    }
  }

  goBack() {
    // Redireciona para a tela de login
    this.router.navigate(['/login']);
  }
}
