import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { UserInfo } from '../models/UserInfo';
const Api_Url = 'https://localhost:44302'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  register(regUserData: RegisterUser) {
    console.log('service layer');
    return this.http.post(`${Api_Url}/api/Account/Register`, regUserData,  { headers: this.getHeaders() });// code admin access only
  }

  login(loginInfo){
    const authString = 
       `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    return this.http.post(`${Api_Url}/token`, authString).subscribe((token: Token) => {
      this.userInfo = token;
      localStorage.setItem('id_token', token.access_token);
      this.isLoggedIn.next(true);
      this.currentUser().subscribe((response: UserInfo) => {
        console.log(response.IsAdmin);
        if (response.IsAdmin == true) 
        {
            this.router.navigate(['admin/index']);
        }
        else 
        {
          this.router.navigate(['student/index']);
        }
      });
    });
    
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) {
      return new Observable(observer => observer.next(false));
    }

    return this.http.get(`${Api_Url}/api/Account/UserInfo`, { headers: this.setHeaders() });
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);

    this.http.post(`${Api_Url}/api/Account/Logout`, { headers: this.setHeaders() });
    this.router.navigate(['/login']);
  }

  private setHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `bearer ${localStorage.getItem('id_token')}`);
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `bearer ${localStorage.getItem('id_token')}`);
  }
}
