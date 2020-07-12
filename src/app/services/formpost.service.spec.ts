import { TestBed } from '@angular/core/testing';

import { FormpostService } from './formpost.service';

describe('FormpostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormpostService = TestBed.get(FormpostService);
    expect(service).toBeTruthy();
  });
});
