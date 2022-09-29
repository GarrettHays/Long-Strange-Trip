import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { EntriesDetailComponent } from './entries-detail/entries-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { RecentComponent } from './recent/recent.component';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    EntriesDetailComponent,
    MessagesComponent,
    RecentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
