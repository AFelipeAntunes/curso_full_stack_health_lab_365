import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [];

  constructor() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  registerUser(email: string, password: string) {
    this.users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  validateUser(email: string, password: string) {
    return this.users.find(user => user.email === email && user.password === password);
  }
}