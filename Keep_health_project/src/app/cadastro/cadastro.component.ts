import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent implements OnInit {
  registerForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      dataNascimento: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
      confirmarSenha: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Implementar a lógica de cadastro do usuário
      // Salvar os dados do usuário na localStorage
      console.log('Formulário enviado!');
    } else {
      // Exibir mensagens de erro
    }
  }

  voltar() {
    // Implementar a lógica para voltar à tela de login
  }
}
