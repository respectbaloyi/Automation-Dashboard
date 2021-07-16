import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantonlineComponent } from './merchantonline.component';

describe('MerchantonlineComponent', () => {
  let component: MerchantonlineComponent;
  let fixture: ComponentFixture<MerchantonlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantonlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
