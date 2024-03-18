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

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.authService.validateUser(this.email, this.password)) {
      // Redirecionar para a página de home
    } else {
      // Exibir um alerta
      alert('Email ou senha inválidos');
    }
  }
}