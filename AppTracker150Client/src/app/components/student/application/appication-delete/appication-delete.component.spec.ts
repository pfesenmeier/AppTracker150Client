import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppicationDeleteComponent } from './appication-delete.component';

describe('AppicationDeleteComponent', () => {
  let component: AppicationDeleteComponent;
  let fixture: ComponentFixture<AppicationDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppicationDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppicationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
