import { TestBed } from '@angular/core/testing';

import { BankOperationsService } from './bank-operations.service';

describe('BankOperationsService', () => {
  let service: BankOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
