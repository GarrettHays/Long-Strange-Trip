import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../entry';
import { EntryService } from '../entry.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-entries-detail',
  templateUrl: './entries-detail.component.html',
  styleUrls: ['./entries-detail.component.scss']
})
export class EntriesDetailComponent implements OnInit {
  entry: Entry | undefined;

  constructor(
    private route: ActivatedRoute,
    private entryService: EntryService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getEntry();
  }

  getEntry(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.entryService.getEntry(id)
      .subscribe(entry => this.entry = entry);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.entry) {
      this.entryService.updateEntry(this.entry)
        .subscribe(() => this.goBack());
    }
  }

}
