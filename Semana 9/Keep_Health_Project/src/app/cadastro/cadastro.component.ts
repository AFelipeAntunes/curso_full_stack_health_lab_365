import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Certifique-se de que este caminho esteja correto

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

  constructor(private authService: AuthService) { // Injetando o AuthService
    this.nome = '';
    this.email = '';
    this.dataNascimento = new Date();
    this.senha = '';
    this.confirmarSenha = '';
  }

  onSubmit() {
    if (this.senha === this.confirmarSenha) {
      this.authService.register(this.email, this.senha); // Usando o AuthService para registrar o usuário
      window.location.href = '/login';
    } else {
      console.log('As senhas não coincidem');
    }
  }

  onVoltar() {
    // Aqui você pode adicionar a lógica para voltar para a tela de login
    console.log('Voltar para a tela de login');
  }
}