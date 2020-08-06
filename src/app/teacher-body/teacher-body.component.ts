import { Component, OnInit } from '@angular/core';
import { DataService } from '../header/data.service';

@Component({
  selector: 'app-teacher-body',
  templateUrl: './teacher-body.component.html',
  styleUrls: ['./teacher-body.component.css']
})
export class TeacherBodyComponent implements OnInit {

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
  giangviens: any;
  filter: any;
  isSearch = false;
  isNullData = false;
  index: any;
  constructor(private data: DataService
  ) { }

  ngOnInit(): void {
    this.facultys = this.data.khoas;
    this.giangviens = this.data.giangViens;
    this.getGroupTeacher();
    this.updateIndex();
  }

  getGroupTeacher() {

    this.groups = this.giangviens.reduce(function (r, o) {
      let groupKey = 0;
      var m = o.khoa;
      (r[m]) ? r[m].data.push(o) : r[m] = { group: Number(groupKey++), data: [o] };
      return r;
    }, {});

    this.teachers = Object.keys(this.groups).map(k => { return this.groups[k]; });
  }

  updateIndex() {
    for (let teacher of this.teachers) {

      let k = 1 + this.length;

      for (let i = 0, j = k; i < teacher.data.length, j <= teacher.data.length + this.length; i++, j++) {
        teacher.data[i]["index"] = j;
      }
      this.length += teacher.data.length;
    }
  }

  clickButton(key: number, id: number) {
    this.key = key;
    this.idStyle = id;
    this.isShow = true;
    if (this.key == 1) {
      this.teacherInfo = {
        id: '',
        name: '',
        khoa: '',
        phone: '',
        mail: '',
        birthday: ''
      }
      this.isShowEdit = false;
    }
    if (this.key == 2) {
      for (let gv of this.giangviens) {
        if (gv.id == id) {
          this.teacherInfo = gv;
          this.isShowEdit = true;
        }
      }
    }
  }

  addTeacher(formSave) {
    this.newTeacher = {
      id: ++this.length,
      name: formSave.value.name,
      khoa: formSave.value.khoa,
      phone: formSave.value.phone,
      mail: formSave.value.mail,
      birthday: formSave.value.birthday
    }
    this.data.giangViens.push(this.newTeacher);
    this.giangviens = this.data.giangViens;
    this.getGroupTeacher();
    this.length = 0;
    this.updateIndex();
  }

  editTeacher(id: number, formSave) {
    console.log(this.isSearch);
    
    this.index = this.data.giangViens.indexOf(this.teacherInfo);
    this.updateItem = {
      id: id,
      //index: this.teacherInfo.index,
      name: formSave.value.name,
      khoa: formSave.value.khoa,
      phone: formSave.value.phone,
      mail: formSave.value.mail,
      birthday: formSave.value.birthday
    }
    if (this.isSearch) {
      console.log(this.giangviens);
      
      this.data.giangViens[this.index] = this.updateItem; // gán giá trị update cho giá trị ban đầu
      this.giangviens[this.index] = this.updateItem;
      this.teacherInfo = this.updateItem; // sau mỗi lần save update lại giá trị để bấm save nhiều lần
      this.getGroupTeacher();
      this.length = 0;
      this.updateIndex();
    } else {
      this.data.giangViens[this.index] = this.updateItem; // gán giá trị update cho giá trị ban đầu
      this.giangviens = this.data.giangViens;
      this.teacherInfo = this.updateItem; // sau mỗi lần save update lại giá trị để bấm save nhiều lần
      this.getGroupTeacher();
      this.length = 0;
      this.updateIndex();
    }


  }

  show(): String {
    if (this.isShow) {
      return 'container-show';
    } else {
      return 'container';
    }
  }

  search(formSearch) {

    this.filter = formSearch.value;

    this.giangviens = this.data.giangViens.filter(res => {
      return res.name.toLocaleLowerCase().match(this.filter.name.toLocaleLowerCase())
        && res.birthday.toLocaleLowerCase().match(this.filter.birthday.toLocaleLowerCase())
        && res.phone.toLocaleLowerCase().match(this.filter.phone.toLocaleLowerCase());
    });
    if (this.giangviens.length == 0) {
      this.isNullData = true;
      this.isShow = false;
    }else{
      this.isNullData = false;
      this.isShow = false;
    }
    console.log(this.giangviens);

    this.getGroupTeacher();
    this.length = 0;
    this.updateIndex();
    this.isSearch = true;
  }

  cancel() {
    this.length = 0;
    this.giangviens = this.data.giangViens;
    this.getGroupTeacher();
    this.updateIndex();
    this.isSearch = false;
    this.isNullData = false;
    console.log(this.giangviens.length);

  }
}