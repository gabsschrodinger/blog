import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { Subject } from 'src/app/model/subject';
import { PostService } from 'src/app/service/post.service';
import { SubjectService } from 'src/app/service/subject.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  post: Post = new Post();

  subject: Subject = new Subject();
  subjectList: Subject[];
  subjectId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    private subjectService: SubjectService
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);

    if(environment.token == '') {
      this.router.navigate(['/login']);
    }

    let id = this.route.snapshot.params['id'];
    this.findByIdPost(id);
    this.findAllSubject();
  }

  findByIdSubject() {
    this.subjectService.getByIdSubject(this.subjectId).subscribe((resp: Subject) => {
      this.subject = resp;
    })
  }

  findAllSubject() {
    this.subjectService.getAllSubject().subscribe((resp: Subject[]) => {
      this.subjectList = resp;
    })
  }

  findByIdPost(id: number) {
    this.postService.getByIdPost(id).subscribe((resp: Post) => {
      this.post = resp;
    })
  }

  update() {
    this.subject.id = this.subjectId;
    this.post.subject = this.subject;

    this.postService.putPost(this.post).subscribe((resp: Post) => {
      this.post = resp;
      alert('Post updated!');
      this.router.navigate(['/home']);
    })
  }

}
