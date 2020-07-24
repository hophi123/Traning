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

  groups: any = this.data.giangViens.reduce(function (r, o) {
    let groupKey = 0;
    var m = o.khoa;
    (r[m]) ? r[m].data.push(o) : r[m] = { group: Number(groupKey++), data: [o] };
    return r;
  }, {});


  teachers: any
  teacherInfo: any;
  khoas: any;
  khoaName: String;
  isShow = false;
  isShowEdit = false;
  add: String;
  constructor(private data: DataService
  ) {
    this.khoas = this.data.khoas;
    this.teachers = Object.keys(this.groups).map(k => { return this.groups[k]; });
    console.log(this.teachers);
  }

  clickButtonAdd() {
    this.isShow = true;
    this.isShowEdit = false;
    console.log('Add :' +this.isShow);
    console.log('Edit :' +this.isShowEdit);
  }

  clickButtonEdit() {
    this.isShowEdit = true;
    this.isShow = false;
    console.log('Edit :' +this.isShowEdit); 
    console.log('Add :' +this.isShow);
  }

  show(): String {
    if(this.isShow || this.isShowEdit){
      return this.add = 'container-show';
    }else{
      return this.add = 'container';
    }
  }

  getTeacherInfo(id: number){
    this.teacherInfo = this.data.giangViens[id-1];
    console.log(this.teacherInfo);
  }

}