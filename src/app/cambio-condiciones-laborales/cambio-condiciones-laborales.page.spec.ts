import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioCondicionesLaboralesPage } from './cambio-condiciones-laborales.page';

describe('CambioCondicionesLaboralesPage', () => {
  let component: CambioCondicionesLaboralesPage;
  let fixture: ComponentFixture<CambioCondicionesLaboralesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioCondicionesLaboralesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioCondicionesLaboralesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
