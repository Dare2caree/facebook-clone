import { TestBed } from '@angular/core/testing';

import { FbgGuard } from './fbg.guard';

describe('FbgGuard', () => {
  let guard: FbgGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FbgGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
