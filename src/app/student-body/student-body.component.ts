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
  constructor(private data: DataService) { 
    this.khoas = this.data.khoas;
    this.lops = this.data.lops;
  }

  ngOnInit(): void {
  }

}
