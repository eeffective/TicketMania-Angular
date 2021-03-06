import { Injectable } from '@angular/core';

const TOKEN_KEY = 'jwt';
const USER_KEY = 'user';
const CART_KEY = 'cart';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() {
    window.localStorage.clear();
  }

  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(localStorage.getItem(USER_KEY));
  }

  public getCart(): any {
    return JSON.parse(localStorage.getItem(CART_KEY));
  }

  public addToCart(tickets) {
    window.localStorage.removeItem(CART_KEY);
    window.localStorage.setItem(CART_KEY, tickets);
  }
}
