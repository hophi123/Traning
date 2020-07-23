import { Component, OnInit } from '@angular/core';
import { DataService } from '../header/data.service';

@Component({
  selector: 'app-teacher-body',
  templateUrl: './teacher-body.component.html',
  styleUrls: ['./teacher-body.component.css']
})
export class TeacherBodyComponent implements OnInit {

  ngOnInit(): void {
  }

  groups:any = this.data.giangViens.reduce(function (r, o) {
    let groupKey = 0;
    var m = o.khoa;
    (r[m]) ? r[m].data.push(o) : r[m] = { group: Number(groupKey++), data: [o] };
    return r;
 }, {});
 

  teachers: any
   khoas: any;
   khoaName: String;
   constructor(private data: DataService
     ) {
     //this.teachers = this.data.giangViens;
     this.khoas = this.data.khoas;
     this.teachers = Object.keys(this.groups).map( k => { return this.groups[k]; });
     console.log(this.teachers);
    
  }

}