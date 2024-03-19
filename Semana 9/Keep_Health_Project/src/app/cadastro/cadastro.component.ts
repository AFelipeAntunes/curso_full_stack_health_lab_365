import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastroForm!: FormGroup; // Use o operador de afirmação não nula (!)

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.cadastroForm = new FormGroup({
      'nome': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'dataNascimento': new FormControl(null, Validators.required),
      'senha': new FormControl(null, Validators.required),
      'confirmarSenha': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.cadastroForm.value.senha === this.cadastroForm.value.confirmarSenha) {
      this.authService.register(this.cadastroForm.value.email, this.cadastroForm.value.senha);
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