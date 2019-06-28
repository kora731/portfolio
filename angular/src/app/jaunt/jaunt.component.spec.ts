import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JauntComponent } from './jaunt.component';

describe('JauntComponent', () => {
  let component: JauntComponent;
  let fixture: ComponentFixture<JauntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JauntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JauntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
