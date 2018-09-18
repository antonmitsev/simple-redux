import { TestBed, inject } from '@angular/core/testing';

import { RdxService } from './rdx.service';

describe('RdxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RdxService]
    });
  });

  it('should be created', inject([RdxService], (service: RdxService) => {
    expect(service).toBeTruthy();
  }));
});
