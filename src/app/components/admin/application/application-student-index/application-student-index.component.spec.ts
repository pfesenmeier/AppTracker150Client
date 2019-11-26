import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationStudentIndexComponent } from './application-student-index.component';

describe('ApplicationStudentIndexComponent', () => {
  let component: ApplicationStudentIndexComponent;
  let fixture: ComponentFixture<ApplicationStudentIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationStudentIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationStudentIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
