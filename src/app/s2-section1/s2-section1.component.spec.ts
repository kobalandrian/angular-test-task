import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S2Section1Component } from './s2-section1.component';

describe('S2Section1Component', () => {
  let component: S2Section1Component;
  let fixture: ComponentFixture<S2Section1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S2Section1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S2Section1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
