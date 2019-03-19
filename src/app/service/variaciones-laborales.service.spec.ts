import { TestBed } from '@angular/core/testing';

import { VariacionesLaboralesService } from './variaciones-laborales.service';

describe('VariacionesLaboralesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VariacionesLaboralesService = TestBed.get(VariacionesLaboralesService);
    expect(service).toBeTruthy();
  });
});
