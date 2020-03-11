import { TestBed } from '@angular/core/testing';

import { NgodetailsService } from './ngodetails.service';

describe('NgodetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgodetailsService = TestBed.get(NgodetailsService);
    expect(service).toBeTruthy();
  });
});
