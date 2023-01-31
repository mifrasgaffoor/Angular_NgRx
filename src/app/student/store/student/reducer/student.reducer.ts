import { Action, createReducer, on } from '@ngrx/store';
import { Student } from './../../../../models/student';
import * as StudentAction from "../action/student.actions"
export const studentFeatureKey = 'student';

export interface StudentState {
  students: Student[];
}

export const initialState: StudentState = {
  students: [],
};

export const reducer = createReducer(
  initialState,
  on(StudentAction.addStudents, (state: StudentState, { student }) => ({
    ...state,
    students: [...state.students, student],
  }))
);

