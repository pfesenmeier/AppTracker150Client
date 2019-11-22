import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppicationDetailComponent } from './appication-detail.component';

describe('AppicationDetailComponent', () => {
  let component: AppicationDetailComponent;
  let fixture: ComponentFixture<AppicationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppicationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppicationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
