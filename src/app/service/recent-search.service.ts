import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecentSearchesService {
  private readonly STORAGE_KEY = 'recentSearches';
  private readonly MAX_SEARCHES = 5;

  recentSearches = signal<string[]>(this.getStoredSearches());

  private getStoredSearches(): string[] {
    const searches = localStorage.getItem(this.STORAGE_KEY);
    return searches ? JSON.parse(searches) : [];
  }

  addSearch(city: string) {
    const searches = [city, ...this.recentSearches()
      .filter(s => s !== city)]
      .slice(0, this.MAX_SEARCHES);

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(searches));
    this.recentSearches.set(searches);
  }
}