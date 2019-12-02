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

    getApplications(){
      return this._http.get(`${APIURL}/Admin/Applications`, { headers: this.getHeaders() })
    }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `bearer ${localStorage.getItem('id_token')}`);
  }
}