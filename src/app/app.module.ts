import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StudentViewComponent } from './student/student-view/student-view.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { studentReducer } from './student/store/student/reducer/student.reducer';
import { studentFeatureKey } from './student/store/student/reducer/student.reducer';
@NgModule({
  declarations: [AppComponent, StudentViewComponent, StudentAddComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
    StoreModule.forFeature(studentFeatureKey, studentReducer),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
