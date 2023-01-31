import { createAction, props } from '@ngrx/store';
import { Student } from './../../../../models/student';

export const addStudents = createAction(
  '[Student] Add Students',
  (student: Student) => ({ student })
);




