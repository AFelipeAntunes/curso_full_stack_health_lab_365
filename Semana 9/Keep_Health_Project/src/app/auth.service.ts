import { Injectable } from '@angular/core';

interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [];

  constructor() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  register(email: string, password: string) {
    this.users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  login(email: string, password: string) {
    return this.users.find(user => user.email === email && user.password === password);
  }
}