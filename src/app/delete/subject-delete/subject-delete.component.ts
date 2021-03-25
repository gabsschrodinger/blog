import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'src/app/model/subject';
import { SubjectService } from 'src/app/service/subject.service';

@Component({
  selector: 'app-subject-delete',
  templateUrl: './subject-delete.component.html',
  styleUrls: ['./subject-delete.component.css']
})
export class SubjectDeleteComponent implements OnInit {

  subject: Subject = new Subject();
  idSubject: number;

  constructor(
    private subjectService: SubjectService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idSubject = this.route.snapshot.params['id'];
    this.findByIdSubject(this.idSubject);
  }

  findByIdSubject(id: number) {
    this.subjectService.getByIdSubject(id).subscribe((resp: Subject) => {
      this.subject = resp;
    })
  }

  removeSubject() {
    this.subjectService.deleteSubject(this.idSubject).subscribe(() => {
      alert("Subject deleted!");
      this.router.navigate(['/subject']);
    })
  }

}
