import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DossierService {

  private baseUrl = 'http://localhost:8080/api/v1/dossiers';

  constructor(private http: HttpClient) { }

  getDossier(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDossier(dossier: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, dossier);
  }

  updateDossier(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteDossier(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getDossiersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
