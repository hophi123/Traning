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

  teachers: any
  newTeacher: any;
  teacherInfo: any;
  facultys: any;
  facultyName: String;
  isShow = false;
  isShowEdit = false;
  add: String;
  idStyle: any;
  length = 0;
  lengthOject: any;
  lengthArray = [];
  key: any;
  groups: any;
  updateItem: any;
  marvelHeroes: any;
  giangviens: any;
  constructor(private data: DataService
  ) {
    this.facultys = this.data.khoas;
    this.getGroupTeacher();
    this.updateIndex();
  }
  getGroupTeacher(){

    this.groups = this.data.giangViens.reduce(function (r, o) {
      let groupKey = 0;
      var m = o.khoa;
      (r[m]) ? r[m].data.push(o) : r[m] = { group: Number(groupKey++), data: [o] };
      return r;
    }, {});

    this.teachers = Object.keys(this.groups).map(k => { return this.groups[k]; });
  }

  updateIndex(){
    for(let teacher of this.teachers){

      let k = 1+this.length;

      for(let i=0, j=k; i<teacher.data.length, j<=teacher.data.length+this.length; i++,j++){
           teacher.data[i]["index"] = j;
      }
      this.length+=teacher.data.length;
    }
  }

  clickButton(key: number, id: number) {
    this.key = key;
    this.idStyle = id;
    this.isShow = true;
    if(this.key == 1){
      this.teacherInfo = {
        id: '',
        name: '',
        khoa: '',
        phone: '',
        mail: '',
        birthday: ''
      }
      this.isShowEdit = false;
      console.log(this.isShowEdit);
      
    }
    if(this.key==2){
      this.teacherInfo = this.data.giangViens[id-1];
      this.isShowEdit = true;
      console.log(this.isShowEdit);
    }
    console.log(this.key);
  }

  addTeacher(){
    this.newTeacher = {
    id: ++this.length,
    name: this.teacherInfo.name,
    khoa: this.teacherInfo.khoa,
    phone: this.teacherInfo.phone,
    mail: this.teacherInfo.mail,
    birthday: this.teacherInfo.birthday
    }
    console.log(this.newTeacher);
    console.log('khoa' +this.newTeacher.khoa);
    
    this.data.giangViens.push(this.newTeacher);
    this.getGroupTeacher();
    this.length = 0;
    this.updateIndex();
  }

  editTeacher(id: number){
    console.log(this.data.giangViens);
    this.updateItem = {
      id: id,
      name: this.teacherInfo.name,
      khoa: this.teacherInfo.khoa,
      phone: this.teacherInfo.phone,
      mail: this.teacherInfo.mail,
      birthday: this.teacherInfo.birthday
    }

    this.data.giangViens[id-1] = this.updateItem;
    this.getGroupTeacher();
    this.length = 0;
    this.updateIndex();
    console.log(this.data.giangViens);
    
  }

  show(): String {
    if(this.isShow){
      return 'container-show';
    }else{
      return 'container';
    }
  }
}