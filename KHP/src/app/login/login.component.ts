import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  email: string;
  password: string;
  // quaisquer outras propriedades que um usuário possa ter
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: User) => u.email === this.user.email && u.password === this.user.password);
  
    if (user) {
      this.router.navigate(['/home']); // Redireciona para a página 'home' se o usuário for encontrado
    } else {
      alert('Usuário ou senha inválidos');
    }
  }

  forgotPassword(): void {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: User) => u.email === this.user.email);

    if (user) {
      user.password = 'a1b2c4d4';
      localStorage.setItem('users', JSON.stringify(users));
      alert('Sua senha foi alterada para a1b2c4d4. Por favor, prossiga utilizando essa senha.');
    } else {
      alert('Usuário não encontrado');
    }
  }

  register(): void {
    this.router.navigate(['/cadastro']);
  }
}