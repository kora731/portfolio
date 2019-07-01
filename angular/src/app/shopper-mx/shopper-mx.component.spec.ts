import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopperMXComponent } from './shopper-mx.component';

describe('ShopperMXComponent', () => {
  let component: ShopperMXComponent;
  let fixture: ComponentFixture<ShopperMXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopperMXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopperMXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
