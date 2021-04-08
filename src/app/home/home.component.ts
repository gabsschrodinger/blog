import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Post } from '../model/post';
import { Subject } from '../model/subject';
import { User } from '../model/user';
import { AlertsService } from '../service/alerts.service';
import { AuthService } from '../service/auth.service';
import { PostService } from '../service/post.service';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  post: Post = new Post();
  subject: Subject = new Subject();
  subjectList: Subject[];
  subjectId: number;
  user: User = new User();
  userId = environment.id;
  postList: Post[];

  constructor(
    private router: Router,
    private postService: PostService,
    private subjectService: SubjectService,
    private auth: AuthService,
    private alertService: AlertsService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);

    console.log(environment.id);

    if(environment.token == '') {
      /* alert('Session expired!'); */
      this.router.navigate(['/login']);
    }

    this.seeAllSubjects();
    this.seeAllPosts();
  }

  seeAllSubjects() {
    this.subjectService.getAllSubject().subscribe((resp: Subject[]) => {
      this.subjectList = resp;
    })
  }

  findByIdSubject() {
    this.subjectService.getByIdSubject(this.subjectId).subscribe((resp: Subject) => {
      this.subject = resp;
    })
  }

  findByIdUser() {
    this.auth.getByIdUser(this.userId).subscribe((resp: User) => {
      this.user = resp;
    })
  }

  publishPost() {
    this.subject.id = this.subjectId;
    this.post.subject = this.subject;

    this.user.id = this.userId;
    this.post.user = this.user;

    this.postService.postPost(this.post).subscribe((resp: Post) => {
      this.post = resp;
      this.alertService.showAlertSuccess('Published!');
      this.post = new Post();
      this.seeAllPosts();
    })
  }

  seeAllPosts() {
    this.postService.getAllPost().subscribe((resp: Post[]) => {
      this.postList = resp;
    })
  }

}
