import { Component } from '@angular/core';
import { addStudents } from './../store/student/action/student.actions';
import { Student } from './../../models/student';
import { Store } from '@ngrx/store';
import { StudentState } from '../store/student/reducer/student.reducer';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css'],
})
export class StudentAddComponent {
  constructor(private store: Store<StudentState>) {}
  addStudents(studentName: string) {
    const student = new Student();
    student.name = studentName;
    this.store.dispatch(addStudents(student));
  }
}
