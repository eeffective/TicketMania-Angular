import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventModel } from './models/eventModel';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  apiurl = '';

  getEvents(): Observable<EventModel[]> {
    return this.http
      .get<EventModel[]>('http://localhost:8080/events')
      .pipe(catchError(this.handleError));
  }

  addEvent(eventModel: EventModel): Observable<EventModel> {
    return this.http
      .post<EventModel>('http://localhost:8080/events', eventModel)
      .pipe(catchError(this.handleError));
  }

  searchEvents(term: string) : Observable<any>{
    return this.http.jsonp('http://localhost:8080/events/' + term, 'callback').pipe(
      catchError(this.handleError)
    );
  }

  handleError(err) {
    if (err instanceof HttpErrorResponse) {
      console.log('server side error occurred');
    } else {
      console.log('client side error occurred');
    }
    return throwError(err);
  }
}
