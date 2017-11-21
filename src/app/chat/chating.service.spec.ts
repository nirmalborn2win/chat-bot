import { TestBed, inject } from '@angular/core/testing';

import { ChatingService } from './chating.service';

describe('ChatingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatingService]
    });
  });

  it('should be created', inject([ChatingService], (service: ChatingService) => {
    expect(service).toBeTruthy();
  }));
});
