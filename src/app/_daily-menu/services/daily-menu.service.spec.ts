import { TestBed, inject } from '@angular/core/testing';

import { DailyMenuService } from './daily-menu.service';

describe('DailyMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailyMenuService]
    });
  });

  it('should ...', inject([DailyMenuService], (service: DailyMenuService) => {
    expect(service).toBeTruthy();
  }));
});
