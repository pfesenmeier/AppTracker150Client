import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppicationCreateComponent } from './appication-create.component';

describe('AppicationCreateComponent', () => {
  let component: AppicationCreateComponent;
  let fixture: ComponentFixture<AppicationCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppicationCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppicationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
