import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Application } from '../models/Application';

const Api_Url = 'https://localhost:44302'
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  

  constructor(private http: HttpClient) { }

  getStudentApplication() {
    return this.http.get(`${Api_Url}/api/student/application`, { headers: this.getHeaders() });

  }

  createStudentApplication(application : Application) {
    return this.http.post(`${Api_Url}/api/application`, application, { headers: this.getHeaders() });
  }

  getApplication(id){
    return this.http.get(`${Api_Url}/api/application/${id}`, {headers: this.getHeaders() });
  }

  updateApplication(application: Application) {
    return this.http.put(`${Api_Url}/api/application`, application, {headers: this.getHeaders() });
  }

  deleteApplication(id: number) {
    return this.http.delete(`${Api_Url}/application/${id}`, { headers: this.getHeaders() });
  }
  

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
