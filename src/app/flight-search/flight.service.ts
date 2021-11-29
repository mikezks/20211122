import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../entities/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  load(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    const headers = new HttpHeaders()
      .set('accept', 'application/json');

    return this.http.get<Flight[]>(url, { params, headers });
  }
}
