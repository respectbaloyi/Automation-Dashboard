import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuccComponent } from './mucc.component';

describe('MuccComponent', () => {
  let component: MuccComponent;
  let fixture: ComponentFixture<MuccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
