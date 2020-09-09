import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../../../environments/config';



@Injectable({
  providedIn: 'root'
})
export class RepertuarService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(baseUrl.url);
  }
  get(id: any): Observable<any>{
     return this.http.get(`${baseUrl.url}/${id}`);
  }
}