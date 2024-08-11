import { TestBed } from '@angular/core/testing';

import { ExcerciseOutputService } from './excercise-output.service';

describe('ExcerciseOutputService', () => {
  let service: ExcerciseOutputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcerciseOutputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
