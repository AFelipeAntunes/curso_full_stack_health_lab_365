import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nome: string;
  email: string;
  dataNascimento: Date;
  senha: string;
  confirmarSenha: string;

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.senha === this.confirmarSenha) {
      this.authService.registerUser(this.email, this.senha);
      // Redirecionar para a página de login
    } else {
      // Exibir um alerta
      alert('As senhas não coincidem');
    }
  }

  onBack() {
    // Redirecionar para a página de login
  }
}