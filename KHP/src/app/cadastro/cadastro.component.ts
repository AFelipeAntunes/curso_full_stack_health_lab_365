import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  name: string;
  email: string;
  birthdate: string;
  password: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  user = {
    name: '',
    email: '',
    birthdate: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  register(): void {
    if (this.user.password !== this.user.confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({
      name: this.user.name,
      email: this.user.email,
      birthdate: this.user.birthdate,
      password: this.user.password
    });
    localStorage.setItem('users', JSON.stringify(users));

    this.router.navigate(['/login']);
  }

  goBack(): void {
    this.router.navigate(['/login']);
  }
}