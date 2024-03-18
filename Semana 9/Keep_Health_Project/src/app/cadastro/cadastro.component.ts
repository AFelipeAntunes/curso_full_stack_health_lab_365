import { Component } from '@angular/core';

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

  constructor() {
    this.nome = '';
    this.email = '';
    this.dataNascimento = new Date();
    this.senha = '';
    this.confirmarSenha = '';
  }

  onSubmit() {
    if (this.senha === this.confirmarSenha) {
      // Aqui você pode adicionar a lógica para lidar com o envio do formulário
      console.log(`Nome: ${this.nome}, Email: ${this.email}, Data de Nascimento: ${this.dataNascimento}, Senha: ${this.senha}`);
      localStorage.setItem('usuarios', JSON.stringify({email: this.email, senha: this.senha}));
    } else {
      console.log('As senhas não coincidem');
    }
  }

  onVoltar() {
    // Aqui você pode adicionar a lógica para voltar para a tela de login
    console.log('Voltar para a tela de login');
  }
}