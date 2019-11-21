import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient } from '@angular/common/http'
import { Token } from '../models/Token';

const Api_Url = 'https://localhost:44302'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(regUserData: RegisterUser) {
    return this.http.post(`${Api_Url}/api/Account/Register`, regUserData)// code admin access only
  }

  login(loginInfo){
    const authString = `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    return this.http.post(`${Api_Url}/token`, authString).subscribe((token: Token) => {
      localStorage.setItem('id_token', token.access_token);
    });
    
  }
}
