import { TestBed } from '@angular/core/testing';

import { ParcelGuard } from './parcel.guard';

describe('ParcelGuard', () => {
  let guard: ParcelGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ParcelGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
