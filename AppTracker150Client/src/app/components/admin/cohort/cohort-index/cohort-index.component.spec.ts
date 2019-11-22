import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CohortIndexComponent } from './cohort-index.component';

describe('CohortIndexComponent', () => {
  let component: CohortIndexComponent;
  let fixture: ComponentFixture<CohortIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CohortIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CohortIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
