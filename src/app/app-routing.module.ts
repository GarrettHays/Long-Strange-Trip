import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntriesComponent } from './entries/entries.component';
import { RecentComponent } from './recent/recent.component';
import { EntriesDetailComponent } from './entries-detail/entries-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/recent', pathMatch: 'full' },
  { path: 'entries', component: EntriesComponent },
  { path: 'recent', component: RecentComponent },
  { path: 'detail/:id', component: EntriesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }