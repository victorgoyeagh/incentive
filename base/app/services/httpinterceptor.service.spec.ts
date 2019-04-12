/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpinterceptorService } from './httpinterceptor.service';

describe('Service: Httpinterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpinterceptorService]
    });
  });

  it('should ...', inject([HttpinterceptorService], (service: HttpinterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
