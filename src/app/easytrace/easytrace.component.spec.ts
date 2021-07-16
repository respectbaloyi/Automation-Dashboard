import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasytraceComponent } from './easytrace.component';

describe('EasytraceComponent', () => {
  let component: EasytraceComponent;
  let fixture: ComponentFixture<EasytraceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasytraceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasytraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
