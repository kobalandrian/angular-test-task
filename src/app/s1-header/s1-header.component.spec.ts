import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S1HeaderComponent } from './s1-header.component';

describe('S1HeaderComponent', () => {
  let component: S1HeaderComponent;
  let fixture: ComponentFixture<S1HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S1HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S1HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
