import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private authService: AuthService) {
    this.email = '';
    this.password = '';
  }

  onSubmit() {
    const user = this.authService.login(this.email, this.password);
    if (user) {
      // Redirecionar para a página de home
      window.location.href = '/home';
    } else {
      // Exibir um alerta
      alert('Email ou senha inválidos');
    }
  }

  onRegister() {
    window.location.href = '/cadastro';
  }
}