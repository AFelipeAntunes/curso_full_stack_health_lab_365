import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // TODO: Implementar a lógica de autenticação
    console.log('Dados do login:', this.email, this.password);

    // Simulando autenticação com sucesso
    this.router.navigate(['/home']);
  }
}