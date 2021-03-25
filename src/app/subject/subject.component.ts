import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Subject } from '../model/subject';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subject: Subject = new Subject();
  subjectList: Subject[];

  constructor(
    private router: Router,
    private subjectService: SubjectService
  ) { }

  ngOnInit() {
    if(environment.token == '') {
      /* alert('Session expired!'); */
      this.router.navigate(['/login']);
    }

    this.findAllSubject();
    
  }

  findAllSubject() {
    this.subjectService.getAllSubject().subscribe((resp: Subject[]) => {
      this.subjectList = resp;
      console.log(this.subjectList);
    })
  }

  createSubject() {
    this.subjectService.postSubject(this.subject).subscribe((resp: Subject) => {
      this.subject = resp
      alert('Subject registered!')
      this.findAllSubject()
      this.subject = new Subject()
    })
  }

  createAndUpdate() {
    this.createSubject()
    this.findAllSubject()
  }

}
