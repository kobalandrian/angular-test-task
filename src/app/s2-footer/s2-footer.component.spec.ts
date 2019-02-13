import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S2FooterComponent } from './s2-footer.component';

describe('S2FooterComponent', () => {
  let component: S2FooterComponent;
  let fixture: ComponentFixture<S2FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S2FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S2FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
