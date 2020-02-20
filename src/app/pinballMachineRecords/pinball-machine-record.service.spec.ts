import { TestBed } from '@angular/core/testing';

import { PinballMachineRecordService } from './pinball-machine-record.service';

describe('PinballMachineRecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PinballMachineRecordService = TestBed.get(PinballMachineRecordService);
    expect(service).toBeTruthy();
  });
});
