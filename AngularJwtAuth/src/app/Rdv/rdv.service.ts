import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  private baseUrl = 'http://localhost:8080/api/v1/rdvs';

  constructor(private http: HttpClient) { }

  getRdv(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createRdv(rdv: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, rdv);
  }

  updateRdv(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteRdv(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getRdvsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
