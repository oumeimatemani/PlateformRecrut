import { TestBed } from '@angular/core/testing';

import { CamundaMonitoringService } from './camunda-monitoring.service';

describe('CamundaMonitoringService', () => {
  let service: CamundaMonitoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamundaMonitoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
