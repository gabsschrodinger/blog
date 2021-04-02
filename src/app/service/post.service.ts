import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8080/posts', this.token);
  }

  getByIdPost(id: number): Observable<Post> {
    return this.http.get<Post>(`http://localhost:8080/posts/${id}`, this.token)
  }

  postPost(post: Post): Observable<Post> {
    return this.http.post<Post>('http://localhost:8080/posts', post, this.token);
  }

  putPost(post: Post): Observable<Post> {
    return this.http.put<Post>('http://localhost:8080/posts', post, this.token);
  }

  deletePost(id: number) {
    return this.http.delete(`http://localhost:8080/posts/${id}`, this.token);
  }
}
