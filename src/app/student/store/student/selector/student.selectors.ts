import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudent from '../reducer/student.reducer';
export const selectStudentState =
  createFeatureSelector<fromStudent.StudentState>(
    fromStudent.studentFeatureKey
  );

export const selectStudent = createSelector(
  selectStudentState,
  (state: fromStudent.StudentState) => state.students
);
