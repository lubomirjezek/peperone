import { TestBed, inject } from '@angular/core/testing';

import { MenuCardService } from './menu-card.service';

describe('MenuCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuCardService]
    });
  });

  it('should ...', inject([MenuCardService], (service: MenuCardService) => {
    expect(service).toBeTruthy();
  }));
});
