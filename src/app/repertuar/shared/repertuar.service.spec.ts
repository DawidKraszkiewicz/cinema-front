import { TestBed } from '@angular/core/testing';

import { RepertuarService } from './repertuar.service';

describe('RepertuarService', () => {
  let service: RepertuarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepertuarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
