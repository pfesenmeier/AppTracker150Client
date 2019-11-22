import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppicationIndexComponent } from './appication-index.component';

describe('AppicationIndexComponent', () => {
  let component: AppicationIndexComponent;
  let fixture: ComponentFixture<AppicationIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppicationIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppicationIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
