import { Component, OnInit } from '@angular/core';
import { DataService } from '../header/data.service'

@Component({
  selector: 'app-student-body',
  templateUrl: './student-body.component.html',
  styleUrls: ['./student-body.component.css']
})
export class StudentBodyComponent implements OnInit {

  khoas: any;
  lops: any;
  lopOject: any;
  sinhviens: any;
  lopArrays: any;
  sinhvienArrays: any;
  lopById = [];
  sinhvienById = [];
  idLop: any;
  idKhoa: any;
  isShow = false;
  isShowEdit = false;
  isShowLop = [];
  isShowStudent = [];
  studentInfo: any;
  idStyle: any;
  constructor(private data: DataService) {
    this.khoas = this.data.khoas;
    this.lops = this.data.lops;
    this.sinhviens = this.data.sinhviens;
  }

  ngOnInit(): void {
  }

  groups: any = this.data.sinhviens.reduce(function (r, o) {
    let groupKey = 0;
    var m = o.lop;
    (r[m]) ? r[m].data.push(o) : r[m] = { group: Number(groupKey++), data: [o] };
    return r;
  }, {});

  clickButton(key: number, id: number) {
    this.isShow = true;
    this.idStyle = id;
    if(key==1){
      this.studentInfo = {
        id: "",
        name: "",
        birthday: "",
        khoa: "",
        lop: ""
      }
      this.isShowEdit = false;
    }

    if(key == 2){
      this.studentInfo = this.sinhviens[id-1];
      this.isShowEdit = true;
    }
  }

  show(): String {
    if (this.isShow) {
      return 'container-show';
    } else {
      return 'container';
    }
  }

  getStudentInfo(id: number) {
    this.studentInfo = this.data.sinhviens[id - 1];
  }

  getClass(id: number) {

    this.idKhoa = id;
    this.lopArrays = [];
    for (let lop of this.lops) {
      if (lop.khoa == id) {
        this.lopOject = {
          name: lop.name,
          id: lop.id,
          khoa: lop.khoa
        }
        this.isShowLop[id] = !this.isShowLop[id];
        this.lopArrays.push(this.lopOject);
      }
    }
    this.lopById[id] = this.lopArrays;
  }

  getStudent(idLop: number) {
    this.sinhvienArrays = [];
    for(let sv of this.sinhviens){
      if(idLop == sv.lop){
        this.sinhvienArrays.push(sv);
      }
      this.isShowStudent[idLop] = !this.isShowStudent[idLop];
    }
    
    console.log(this.isShowStudent[idLop]);
    
    this.sinhvienById[idLop] = this.sinhvienArrays;
    console.log(this.sinhvienById[idLop]);
    
  }
}
