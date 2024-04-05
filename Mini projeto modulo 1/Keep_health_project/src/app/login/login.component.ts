import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  login() {
    if (this.authService.login(this.email, this.password)) {
      // Redirecionar para a home
    } else {
      alert('Usuário ou senha inválidos');
    }
  }

  resetPassword() {
    this.authService.resetPassword(this.email);
    alert('Sua senha foi redefinida para a1b2c4d4');
  }

  register() {
    // Redirecionar para a tela de cadastro
  }
}

@NgModule({
  declarations: [LoginComponent],
  imports: [FormsModule]
})
export class LoginModule { }
