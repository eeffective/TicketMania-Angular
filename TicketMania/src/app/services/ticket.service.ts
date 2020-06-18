import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TokenStorageService } from './authentication/token-storage.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


const API_URL = "http://localhost:8080/api/tickets"
@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient, private storage: TokenStorageService) { }

  addTicket(ticketModel: any): Observable<any> {
    return this.http
      .post<any>(API_URL, ticketModel)
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
