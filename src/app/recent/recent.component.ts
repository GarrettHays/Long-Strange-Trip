import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: [ './recent.component.scss' ]
})
export class RecentComponent implements OnInit {
  entries: Entry[] = [];

  constructor(private entryService: EntryService) { }

  ngOnInit(): void {
    this.getEntries();
  }

  getEntries(): void {
    this.entryService.getEntries()
      .subscribe(entries => this.entries = entries.slice(1, 4));
  }
}