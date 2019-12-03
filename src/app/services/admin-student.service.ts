import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class AdminStudentService {

  constructor(private _http: HttpClient) { }

    getStudents(){
      return this._http.get(`${APIURL}/Admin/Students`, { headers: this.getHeaders()})
    }

    getStudentProfile(id:string){
      return this._http.get(`${APIURL}/Admin/Students?id=${id}`, { headers: this.getHeaders()})
    }

    getUser(id:string){
      return this._http.get(`${APIURL}/Admin/Users?id=${id}`, { headers: this.getHeaders()})
    }

    getApplications(){
      return this._http.get(`${APIURL}/Admin/Applications`, { headers: this.getHeaders() })
    }

    getApplicationsByStudentId(id,studentId){
      return this._http.get(`${APIURL}/Admin/Applications?id=${id}&studentId=${studentId}`, { headers: this.getHeaders() })
    }

    deleteStudent(id: number){
      return this._http.delete(`${APIURL}/Admin/Students?id=${id}`, { headers: this.getHeaders() });
    }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `bearer ${localStorage.getItem('id_token')}`);
  }
}
