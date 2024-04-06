import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  name: string = '';
  email: string = '';
  dob: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    if (this.password === this.confirmPassword) {
      this.authService.register(this.email, this.password);
      // Redirecionar para a home
    } else {
      alert('As senhas não coincidem');
    }
  }

  goBack() {
    this.router.navigate(['/login']);
  }
}
