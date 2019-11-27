import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cohort } from '../models/cohort';

const Api_Url = 'https://localhost:44302';

@Injectable({
  providedIn: 'root'
})

export class CohortService {

  constructor(private http: HttpClient) { }

  getCohort(id) {
    return this.http.get(`${Api_Url}/api/cohort/${id}`, { headers: this.getHeaders() });
  }
  
  getAllCohort() {
    return this.http.get(`${Api_Url}/api/cohort`, { headers: this.getHeaders() });
  }
  
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
}
  createCohort(cohort: Cohort) {
    return this.http.post(`${Api_Url}/api/cohort`, cohort, { headers: this.getHeaders() });
  }

  updateCohort(cohort: Cohort) {
    return this.http.put(`${Api_Url}/api/cohort`, cohort, { headers: this.getHeaders() });
  }

  deleteCohort(id: number) {
    return this.http.delete(`${Api_Url}/api/cohort/${id}`, { headers: this.getHeaders() })
  }

}

