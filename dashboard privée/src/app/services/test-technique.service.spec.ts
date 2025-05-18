import { TestBed } from '@angular/core/testing';

import { TestTechniqueService } from './test-technique.service';

describe('TestTechniqueService', () => {
  let service: TestTechniqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestTechniqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
