import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { Subject } from 'src/app/model/subject';
import { PostService } from 'src/app/service/post.service';
import { SubjectService } from 'src/app/service/subject.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.css']
})
export class PostDeleteComponent implements OnInit {

  post: Post = new Post();
  postId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);

    if(environment.token == '') {
      this.router.navigate(['/login']);
    }

    this.postId = this.route.snapshot.params['id'];
    this.findByIdPost(this.postId);
  }

  findByIdPost(id: number) {
    this.postService.getByIdPost(id).subscribe((resp: Post) => {
      this.post = resp;
    })
  }

  delete() {
    this.postService.deletePost(this.postId).subscribe(() => {
      alert('Post deleted!');
      this.router.navigate(['/home']);
    })
  }

}
