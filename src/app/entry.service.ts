import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Entry } from './entry';
import { ENTRIES } from './mock-entries';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class EntryService {

  private entriesUrl = 'api/entries';  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getEntries(): Observable<Entry[]> {
    const entries = of(ENTRIES);
    return this.http.get<Entry[]>(this.entriesUrl)
      .pipe(
        tap(_ => this.log('fetched entries')),
        catchError(this.handleError<Entry[]>('getEntries', []))
      );
  }

  getEntry(id: number): Observable<Entry> {
    const url = `${this.entriesUrl}/${id}`;
    return this.http.get<Entry>(url).pipe(
      tap(_ => this.log(`fetched entry id=${id}`)),
      catchError(this.handleError<Entry>(`getEntry id=${id}`))
    );
  }

  /** PUT: update the entry on the server */
  updateEntry(entry: Entry): Observable<any> {
    return this.http.put(this.entriesUrl, entry, this.httpOptions).pipe(
      tap(_ => this.log(`updated entry id=${entry.id}`)),
      catchError(this.handleError<any>('updateEntry'))
    );
  }

  /** POST: add a new entry to the server */
  addEntry(entry: Entry): Observable<Entry> {
    return this.http.post<Entry>(this.entriesUrl, entry, this.httpOptions).pipe(
      tap((newEntry: Entry) => this.log(`added entry w/ id=${newEntry.id}`)),
      catchError(this.handleError<Entry>('addEntry'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteEntry(id: number): Observable<Entry> {
    const url = `${this.entriesUrl}/${id}`;

    return this.http.delete<Entry>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted entry id=${id}`)),
      catchError(this.handleError<Entry>('deleteEntry'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}