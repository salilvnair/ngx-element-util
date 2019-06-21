import { TestBed } from '@angular/core/testing';

import { NgxElement} from './ngx-element';

describe('NgxElement', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxElement = TestBed.get(NgxElement);
    expect(service).toBeTruthy();
  });
});
