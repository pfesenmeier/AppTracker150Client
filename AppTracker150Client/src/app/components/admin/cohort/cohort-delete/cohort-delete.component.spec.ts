import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CohortDeleteComponent } from './cohort-delete.component';

describe('CohortDeleteComponent', () => {
  let component: CohortDeleteComponent;
  let fixture: ComponentFixture<CohortDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CohortDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CohortDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
