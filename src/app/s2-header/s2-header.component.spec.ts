import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S2HeaderComponent } from './s2-header.component';

describe('S2HeaderComponent', () => {
  let component: S2HeaderComponent;
  let fixture: ComponentFixture<S2HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S2HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S2HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
