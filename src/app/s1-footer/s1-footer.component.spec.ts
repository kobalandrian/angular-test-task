import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S1FooterComponent } from './s1-footer.component';

describe('S1FooterComponent', () => {
  let component: S1FooterComponent;
  let fixture: ComponentFixture<S1FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S1FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S1FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
