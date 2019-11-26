import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudentProfile } from '../models/StudentProfile';

const Api_Url = "https://localhost:44302;";

@Injectable({
  providedIn: 'root'
})
export class StudentProfileService {

  constructor(private _http: HttpClient) { }

  getProfile(){
    return this._http.get(`${Api_Url}/Student/Profile`, { headers: this.getHeaders() })
  }

  createStudentProfile(studentProfile: StudentProfile) {
    return this._http.post(`${Api_Url}/Student/Profile`, studentProfile, { headers: this.getHeaders() });
  }

  updateProfile(studentProfile: StudentProfile) {
    return this._http.put(`${Api_Url}/Student/Profile`, studentProfile, { headers: this.getHeaders() });
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `bearer ${localStorage.getItem('id_token')}`);
  }
}
