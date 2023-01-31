import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, observable } from 'rxjs';
import { Student } from './../../models/student';
import { selectStudent } from '../store/student/selector/student.selectors';
@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css'],
})
export class StudentViewComponent {
  students$!: Observable<Student[]>;
  constructor(private store: Store) {
    this.students$ = this.store.pipe(select(selectStudent));
  }
}
