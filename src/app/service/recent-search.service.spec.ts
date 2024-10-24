import { TestBed } from '@angular/core/testing';
import { RecentSearchesService } from './recent-search.service';


describe('RecentSearchService', () => {
  let service: RecentSearchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentSearchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
