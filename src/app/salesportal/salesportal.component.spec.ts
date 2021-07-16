import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesportalComponent } from './salesportal.component';

describe('SalesportalComponent', () => {
  let component: SalesportalComponent;
  let fixture: ComponentFixture<SalesportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
