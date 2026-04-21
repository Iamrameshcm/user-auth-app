import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private API = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${this.API}/login`, data);
  }

  forgot(data: any) {
    return this.http.post(`${this.API}/forgot`, data);
  }
}
