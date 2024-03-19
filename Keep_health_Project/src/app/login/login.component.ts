import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }

  onSubmit() {
    // Aqui você pode adicionar a lógica para lidar com o envio do formulário
    console.log(`Email: ${this.email}, Password: ${this.password}`);
  }
}