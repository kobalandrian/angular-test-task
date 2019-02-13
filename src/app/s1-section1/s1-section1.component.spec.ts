import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S1Section1Component } from './s1-section1.component';

describe('S1Section1Component', () => {
  let component: S1Section1Component;
  let fixture: ComponentFixture<S1Section1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S1Section1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S1Section1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
