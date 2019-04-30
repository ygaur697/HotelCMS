import { Injectable } from '@angular/core';
import { Hotel } from './Hotel';
import { HOTELS } from './hotel-list';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class HotelService {

  private hotelsUrl = 'api/hotels';


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      return of(result as T)

    };

  }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelsUrl)
      .pipe(

        catchError(this.handleError<Hotel[]>('getHotels', []))
      );

  }
  /** PUT: update the hotel on the server */
  updateHotel(hotel: Hotel): Observable<any> {
    return this.http.put(this.hotelsUrl, hotel, httpOptions).pipe(

      catchError(this.handleError<any>('updateHotel'))
    );
  }

  /** POST: add a new hotel to the server */
  addhotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.hotelsUrl, hotel, httpOptions).pipe(

      catchError(this.handleError<Hotel>('addHero'))
    );
  }


  getHotel(name: string): Observable<Hotel> {
    // TODO: send the message _after_ fetching the hero

    return of(HOTELS.find(hero => hero.name === name));
  }


  constructor(
    private http: HttpClient) { }

} 
