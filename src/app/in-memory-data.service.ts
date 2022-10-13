import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Entry } from './entry';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const entries = [
      { id: 1, name: 'Rockport, ME', date: '05/01/2020' },
      { id: 2, name: 'North Hampton, NH', date: '06/01/2020' },
      { id: 3, name: 'Sparta, MI', date: '07/01/2020'},
      { id: 4, name: 'Enochville, NC', date: '08/01/2020'},
      { id: 5, name: 'Thomaston, CT', date: '09/01/2020'},
      { id: 6, name: 'Hazel Green, WI', date: '10/01/2020'},
      { id: 7, name: 'Douglass, KS', date: '11/01/2020'},
      { id: 8, name: 'Aledo, TX', date: '12/01/2020'},
      { id: 9, name: 'Summit, NJ', date: '01/01/2021'}
    ];
    return {entries};
  }

  genId(entries: Entry[]): number {
    return entries.length > 0 ? Math.max(...entries.map(entry => entry.id)) + 1 : 11;
  }
}