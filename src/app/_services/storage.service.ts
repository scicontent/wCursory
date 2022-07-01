import { Injectable } from '@angular/core';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  clean(): void {
    window.sessionStorage.clear();
    this.setLocalStorage('RecCode', '')
    this.setLocalStorage('UserName', '')
    this.setLocalStorage('Email', '')
    this.setLocalStorage('UserRole', '')
    this.setLocalStorage('Pats', '')
  }
  setLocalStorage (name: string, value: string) {
    sessionStorage.setItem(name, value)
  }
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }
    return false;
  }
}
