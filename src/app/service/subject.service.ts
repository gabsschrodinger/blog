import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Subject } from '../model/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllSubject(): Observable<Subject[]> {
    return this.http.get<Subject[]>('http://localhost:8080/subject', this.token);
  }

  postSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>('http://localhost:8080/subject', subject, this.token);
  }
}
