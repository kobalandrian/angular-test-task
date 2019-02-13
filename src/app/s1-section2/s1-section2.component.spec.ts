import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S1Section2Component } from './s1-section2.component';

describe('S1Section2Component', () => {
  let component: S1Section2Component;
  let fixture: ComponentFixture<S1Section2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S1Section2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S1Section2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
