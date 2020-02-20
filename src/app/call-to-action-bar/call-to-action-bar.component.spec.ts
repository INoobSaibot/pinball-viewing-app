import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionBarComponent } from './call-to-action-bar.component';

describe('CallToActionBarComponent', () => {
  let component: CallToActionBarComponent;
  let fixture: ComponentFixture<CallToActionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToActionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
