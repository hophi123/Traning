import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeacherBodyComponent } from './teacher-body/teacher-body.component';
import { StudentBodyComponent } from './student-body/student-body.component'

const routes: Routes = [
  {path: 'teacher', component: TeacherBodyComponent},
  {path: 'student', component: StudentBodyComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
