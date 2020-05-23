import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

const API_URL = 'http://localhost:8080/api/musicartists';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor(private http: HttpClient) {}

  addArtist(artistModel: any): Observable<any> {
    return this.http
      .post<any>(API_URL, artistModel)
      .pipe(catchError(this.handleError));
  }

  getArtists(): Observable<any[]> {
    return this.http
      .get<any[]>(API_URL)
      .pipe(catchError(this.handleError));
  }

  getArtist(id: number): Observable<any> {
    return this.http
      .get<any>(`${API_URL}/${id}`)
      .pipe(catchError(this.handleError));
  }

  handleError(err) {
    if (err instanceof HttpErrorResponse) {
      console.log('Server side error ocurred.');
    } else {
      console.log('Client side error ocurred.');
    }
    return throwError(err);
  }
}
