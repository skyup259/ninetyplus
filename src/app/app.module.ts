import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { TeacherComponent } from './component/teacher/teacher.component';
import { StudentComponent } from './component/student/student.component';
import { AlumniComponent } from './component/alumni/alumni.component';
import { NoticeComponent } from './component/notice/notice.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SlidecardComponent } from './component/slidecard/slidecard.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    StudentComponent,
    AlumniComponent,
    NoticeComponent,
    NavbarComponent,
    SlidecardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
