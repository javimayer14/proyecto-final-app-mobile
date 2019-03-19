import { TestBed } from '@angular/core/testing';

import { CambioCondicionesLaboralesService } from './cambio-condiciones-laborales.service';

describe('CambioCondicionesLaboralesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CambioCondicionesLaboralesService = TestBed.get(CambioCondicionesLaboralesService);
    expect(service).toBeTruthy();
  });
});
