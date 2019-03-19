import { TestBed } from '@angular/core/testing';

import { ConflictosLaboralesService } from './conflictos-laborales.service';

describe('ConflictosLaboralesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConflictosLaboralesService = TestBed.get(ConflictosLaboralesService);
    expect(service).toBeTruthy();
  });
});
