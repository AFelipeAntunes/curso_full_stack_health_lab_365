import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  recuperarSenhaForm: FormGroup;
  mostrarFormularioRecuperacaoSenha: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', Validators.required),
    });

    this.recuperarSenhaForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email').value;
      const senha = this.loginForm.get('senha').value;

      const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];
      const usuarioEncontrado = usuariosCadastrados.find(
        (usuario) => usuario.email === email && usuario.senha === senha
      );

      if (usuarioEncontrado) {
        // Navegar para a página inicial
        this.router.navigate(['/home']);
      } else {
        // Exibir mensagem de erro de login inválido
        alert('Usuário ou senha inválidos!');
      }
    } else {
      // Exibir mensagens de erro de validação
    }
  }

  mostrarFormularioRecuperacao() {
    this.mostrarFormularioRecuperacaoSenha = true;
  }

  recuperarSenha() {
    if (this.recuperarSenhaForm.valid) {
      const email = this.recuperarSenhaForm.get('email').value;

      const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];
      const usuarioEncontrado = usuariosCadastrados.find(
        (usuario) => usuario.email === email
      );

      if (usuarioEncontrado) {
        // Alterar a senha do usuário para a senha padrão
        usuarioEncontrado.senha = 'a1b2c4d4';

        // Atualizar o localStorage com a nova senha
        localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));

        // Exibir mensagem de sucesso e informar a nova senha
        alert('Sua senha foi redefinida para "a1b2c4d4". Utilize essa senha para fazer login.');

        // Redirecionar para a página de login
        this.router.navigate(['/login']);
      } else {
        // Exibir mensagem de erro de usuário não encontrado
        alert('Usuário não encontrado!');
      }
    } else {
      // Exibir mensagens de erro de validação
    }
  }

  cadastrar() {
    // Redirecionar para a página de cadastro
    this.router.navigate(['/cadastro']);
  }

}
