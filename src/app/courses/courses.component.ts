import { Component, OnInit, Inject } from '@angular/core';
import { SubjectsService } from '../services/subjects.service';
import { baseURL } from '../shared/baseurl';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  errMess: string;
  subjects:any;

  constructor(private subjectsService: SubjectsService, @Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this.subjectsService.getSubject().subscribe(subject => this.subjects = subject, 
      errmess => this.errMess = <any>errmess);
  }

}
