import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cohort } from '../models/Cohort';
import { APIURL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class CohortService {

  constructor(private http: HttpClient) { }

  getCohort(id) {
    return this.http.get(`${APIURL}/api/cohort/${id}`, { headers: this.getHeaders() });
  }
  
  getAllCohort() {
    return this.http.get(`${APIURL}/api/cohort`, { headers: this.getHeaders() });
  }
  
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
}
  createCohort(cohort: Cohort) {
    return this.http.post(`${APIURL}/api/cohort`, cohort, { headers: this.getHeaders() });
  }

  updateCohort(cohort: Cohort) {
    return this.http.put(`${APIURL}/api/cohort`, cohort, { headers: this.getHeaders() });
  }

  deleteCohort(id: number) {
    return this.http.delete(`${APIURL}/api/cohort/${id}`, { headers: this.getHeaders() })
  }

}

