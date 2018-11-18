import { TestBed, async, inject } from '@angular/core/testing';

import { ProductDetailGuard } from './product-detail.guard';

describe('ProuctDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDetailGuard]
    });
  });

  it('should ...', inject([ProductDetailGuard], (guard: PrdouctDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
