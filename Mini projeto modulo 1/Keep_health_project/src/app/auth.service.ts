import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = typeof localStorage !== 'undefined' && localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')!) : [];

  register(email: string, password: string) {
    this.users.push({ email, password });
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

  login(email: string, password: string) {
    return this.users.find((user: { email: string, password: string }) => user.email === email && user.password === password);
  }

  resetPassword(email: string) {
    const user = this.users.find((user: { email: string, password: string }) => user.email === email);
    if (user) {
      user.password = 'a1b2c4d4';
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('users', JSON.stringify(this.users));
      }
    }
  }
}
