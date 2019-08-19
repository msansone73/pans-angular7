import { TestBed } from '@angular/core/testing';

import { RestaurenteService } from './restaurente.service';

describe('RestaurenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurenteService = TestBed.get(RestaurenteService);
    expect(service).toBeTruthy();
  });
});
