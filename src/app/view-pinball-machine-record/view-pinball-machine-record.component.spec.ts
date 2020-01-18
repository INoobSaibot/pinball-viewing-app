import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPinballMachineRecordComponent } from './view-pinball-machine-record.component';

describe('ViewPinballMachineRecordComponent', () => {
  let component: ViewPinballMachineRecordComponent;
  let fixture: ComponentFixture<ViewPinballMachineRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPinballMachineRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPinballMachineRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
