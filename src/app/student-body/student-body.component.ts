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
  isShow = false;
  edit: String;
  studentInfo: any;
  constructor(private data: DataService) {
    this.khoas = this.data.khoas;
    this.lops = this.data.lops;
    this.sinhviens = Object.keys(this.groups).map(k => { return this.groups[k]; });
  }

  ngOnInit(): void {
  }

  getClass(id: number) {
        this.lopArrays = [];
        for (let lop of this.lops) {
          if (lop.khoa == id) {
            if (!this.lopArrays.includes(lop.name)) {
              this.lopOject = {
                name: lop.name,
                id: lop.id,
                khoa: lop.khoa
              }
              this.lopArrays.push(this.lopOject);
            }
          }
        }
        console.log(this.lopArrays);
        
      }

      groups: any = this.data.sinhviens.reduce(function (r, o) {
        let groupKey = 0;
        var m = o.lop;
        (r[m]) ? r[m].data.push(o) : r[m] = { group: Number(groupKey++), data: [o] };
        return r;
      }, {});

      clickButtonEdit() {
        this.isShow = true;
      }

      show(): String {
        if(this.isShow){
          return this.edit = 'container-show';
        }else{
          return this.edit = 'container';
        }
      }

      getStudentInfo(id: number){
        this.studentInfo = this.data.sinhviens[id-1];
      }
}
