import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherBodyComponent } from './teacher-body.component';

describe('TeacherBodyComponent', () => {
  let component: TeacherBodyComponent;
  let fixture: ComponentFixture<TeacherBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
