import { TestBed } from '@angular/core/testing';
import { RpimsSensorsServiceService } from '../rpims-sensors-service/rpims-sensors-service.service';

describe('RpimsSensorsServiceService', () => {
  let service: RpimsSensorsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RpimsSensorsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
