import { TestBed } from '@angular/core/testing';

import { CaloricOutputService } from './caloric-output.service';

describe('CaloricOutputService', () => {
  let service: CaloricOutputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaloricOutputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
