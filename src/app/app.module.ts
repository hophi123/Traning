import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { TeacherBodyComponent } from './teacher-body/teacher-body.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentBodyComponent } from './student-body/student-body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhonePipe } from './custom-pipes/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    TeacherBodyComponent,
    StudentBodyComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
