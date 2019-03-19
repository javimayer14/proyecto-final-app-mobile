import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspencionesPage } from './suspenciones.page';

describe('SuspencionesPage', () => {
  let component: SuspencionesPage;
  let fixture: ComponentFixture<SuspencionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspencionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspencionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
