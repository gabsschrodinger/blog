import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/user';
import { UserLogin } from '../model/userLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('http://localhost:8080/users/login', userLogin);
  }

  signup(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/users/signup', user);
  }

  getByIdUser(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/users/${id}`);
  }

  logged() {
    let ok: boolean = false;

    if(environment.token !== '') {
      ok = true;
    }
    
    return ok;
  }
}
