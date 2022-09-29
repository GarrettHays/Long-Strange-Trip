import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Entry } from './entry';
import { ENTRIES } from './mock-entries';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class EntryService {

  constructor(private messageService: MessageService) { }

  getEntries(): Observable<Entry[]> {
    const entries = of(ENTRIES);
    this.messageService.add('EntryService: fetched entries');
    return entries;
  }

  getEntry(id: number): Observable<Entry> {
    const entry = ENTRIES.find(e => e.id === id)!;
    this.messageService.add(`EntryService: fetched entry id=${id}`);
    return of(entry);
  }
}