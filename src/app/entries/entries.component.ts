import { Component, OnInit } from '@angular/core';

import { Entry } from '../entry';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
  entries: Entry[] = [];
  
  constructor(private entryService: EntryService) { }

  getEntries(): void {
    this.entryService.getEntries()
        .subscribe(entries => this.entries = entries);
  }

  ngOnInit(): void {
    this.getEntries();
  }

  add(name: string, date: string): void {
    name = name.trim();
    date = date.trim();
    if (!name || !date) { return; }
    this.entryService.addEntry({ name, date } as Entry)
      .subscribe(entry => {
        this.entries.push(entry);
      });
  }

  delete(entry: Entry): void {
    this.entries = this.entries.filter(e => e !== entry);
    this.entryService.deleteEntry(entry.id).subscribe();
  }
  
}
