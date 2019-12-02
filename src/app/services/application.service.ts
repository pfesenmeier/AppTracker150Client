import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Application } from '../models/Application';
import { APIURL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  

  constructor(private http: HttpClient) { }

  getStudentApplication() {
    return this.http.get(`${APIURL}/Student/Applications`, { headers: this.getHeaders() });

  }

  createStudentApplication(application : Application) {
    return this.http.post(`${APIURL}/Student/Applications`, application, { headers: this.getHeaders() });
  }

  getApplication(id){
    return this.http.get(`${APIURL}/Student/Applications?id=${id}`, {headers: this.getHeaders() });
  }

  updateApplication(application: Application) {
    return this.http.put(`${APIURL}/Student/Applications`, application, {headers: this.getHeaders() });
  }

  deleteApplication(id) {
    return this.http.delete(`${APIURL}/Student/Applications?id=${id}`, { headers: this.getHeaders() });
  }
  

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}

