import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome: string = '';
  email: string = '';
  dataNascimento: string = '';
  senha: string = '';
  confirmarSenha: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.senha === this.confirmarSenha) {
      // TODO: Implementar a lógica de salvar o usuário (API, etc.)
      console.log('Dados do cadastro:', this.nome, this.email, this.dataNascimento, this.senha);

      // Simulando o salvamento do usuário com sucesso
      localStorage.setItem('usuarios', JSON.stringify([...this.getUsuarios(), {
        nome: this.nome,
        email: this.email,
        dataNascimento: this.dataNascimento,
        senha: this.senha
      }]));

      this.router.navigate(['/login']);
    } else {
      alert('As senhas não coincidem!');
    }
  }

  getUsuarios(): any[] {
    const usuarios = localStorage.getItem('usuarios');
    return usuarios ? JSON.parse(usuarios) : [];
  }
}