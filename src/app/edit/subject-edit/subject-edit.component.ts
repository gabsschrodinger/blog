import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'src/app/model/subject';
import { SubjectService } from 'src/app/service/subject.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.css']
})
export class SubjectEditComponent implements OnInit {

  subject: Subject = new Subject();

  constructor(
    private subjectService: SubjectService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token == '') {
      /* alert('Session expired!'); */
      this.router.navigate(['/login']);
    }

    let id: number = this.route.snapshot.params["id"];
    this.findByIdSubject(id);
  }

  findByIdSubject(id: number) {
    this.subjectService.getByIdSubject(id).subscribe((resp: Subject) => {
      this.subject = resp;
    })
  }

  updateSubject() {
     this.subjectService.putSubject(this.subject).subscribe((resp: Subject) => {
       this.subject = resp;
       alert("Subject updated!");
       this.router.navigate(['/subject']);
     })
  }

}
