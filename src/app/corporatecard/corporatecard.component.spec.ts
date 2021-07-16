import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatecardComponent } from './corporatecard.component';

describe('CorporatecardComponent', () => {
  let component: CorporatecardComponent;
  let fixture: ComponentFixture<CorporatecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporatecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
