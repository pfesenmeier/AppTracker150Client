import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppicationEditComponent } from './appication-edit.component';

describe('AppicationEditComponent', () => {
  let component: AppicationEditComponent;
  let fixture: ComponentFixture<AppicationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppicationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppicationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
