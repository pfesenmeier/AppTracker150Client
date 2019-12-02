import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudentProfile } from '../models/StudentProfile';
import { APIURL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StudentProfileService {

  constructor(private http: HttpClient) { }

  getProfile(){
    return this.http.get(`${APIURL}/Student/Profile`, { headers: this.getHeaders() })
  }

  createStudentProfile(studentProfile: StudentProfile) {
    return this.http.post(`${APIURL}/Student/Profile`, studentProfile, { headers: this.getHeaders() });
  }

  updateProfile(studentProfile: StudentProfile) {
    return this.http.put(`${APIURL}/Student/Profile`, studentProfile, { headers: this.getHeaders() });
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `bearer ${localStorage.getItem('id_token')}`);
  }
}
