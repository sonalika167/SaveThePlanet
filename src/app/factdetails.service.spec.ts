import { TestBed } from '@angular/core/testing';

import { FactdetailsService } from './factdetails.service';

describe('FactdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FactdetailsService = TestBed.get(FactdetailsService);
    expect(service).toBeTruthy();
  });
});
