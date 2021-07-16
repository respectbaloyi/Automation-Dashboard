import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardonlineComponent } from './cardonline.component';

describe('CardonlineComponent', () => {
  let component: CardonlineComponent;
  let fixture: ComponentFixture<CardonlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardonlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
