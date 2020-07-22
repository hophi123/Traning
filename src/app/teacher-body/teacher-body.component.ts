import { Component, OnInit } from '@angular/core';
import { DataService } from '../header/data.service';

@Component({
  selector: 'app-teacher-body',
  templateUrl: './teacher-body.component.html',
  styleUrls: ['./teacher-body.component.css']
})
export class TeacherBodyComponent implements OnInit {

  teachers: any;
  khoas: any;
  constructor(private data: DataService
    ) {
    this.teachers = this.data.giangViens;
    this.khoas = this.data.khoa;
  }


  ngOnInit(): void {
  }
}
