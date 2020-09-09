import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/film';

@Injectable({
  providedIn: 'root'
})
export class RepertuarService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(baseUrl);
  }
  get(id: any): Observable<any>{
     return this.http.get(`${baseUrl}/${id}`);
  }
}