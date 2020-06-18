import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const API_URL = 'http://localhost:8080/api/musicevents'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {}

  getEvents(): Observable<any> {
    return this.http
      .get<any>(API_URL)
      .pipe(catchError(this.handleError));
  }

  getEventById(id: number): Observable<any> {
    return this.http
      .get<any>(`${API_URL}/${id}`)
      .pipe(catchError(this.handleError));
  }

  getEventsByLocation(location: string): Observable<any> {
    return this.http
      .get<any>(`${API_URL}/location/${location}`)
      .pipe(catchError(this.handleError));
  }

  getEventsByGenre(genre: string): Observable<any> {
    return this.http
      .get<any>(`${API_URL}/genre/${genre}`)
      .pipe(catchError(this.handleError));
  }

  addEvent(eventModel: any): Observable<any> {
    return this.http
      .post<any>(API_URL, eventModel)
      .pipe(catchError(this.handleError));
  }

  handleError(err) {
    if (err instanceof HttpErrorResponse) {
      console.log('Server side error occurred');
    } else {
      console.log('Client side error occurred');
    }
    return throwError(err);
  }
}
