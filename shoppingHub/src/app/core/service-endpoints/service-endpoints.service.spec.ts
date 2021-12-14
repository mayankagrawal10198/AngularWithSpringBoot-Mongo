import { TestBed } from '@angular/core/testing';

import { ServiceEndpointsService } from './service-endpoints.service';

describe('ServiceEndpointsService', () => {
  let service: ServiceEndpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEndpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
