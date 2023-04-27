import { TestBed } from '@angular/core/testing';

import { ButtonCounterService } from './button-counter.service';

describe('ButtonCounterService', () => {
  let service: ButtonCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
