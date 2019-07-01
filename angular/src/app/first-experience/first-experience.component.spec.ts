import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstExperienceComponent } from './first-experience.component';

describe('FirstExperienceComponent', () => {
  let component: FirstExperienceComponent;
  let fixture: ComponentFixture<FirstExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
