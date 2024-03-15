import { TestBed } from '@angular/core/testing';
import { NewinterInterceptor } from './newinter.interceptor';

describe('NewinterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NewinterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NewinterInterceptor = TestBed.inject(NewinterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
