import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from './trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private url:string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/trip";
   }

   public addTrip(trip: Trip) {
    return this.http.post<Trip>(this.url, trip);
   }

   public getTrip(): Observable<Trip[]>{
    return this.http.get<Trip[]>(`${this.url}`);
   }

   public getAllTrips(): Observable<Trip[]>{
    return this.http.get<Trip[]>(this.url);
   }

   public getTripIdByUserId(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/user/${id}`);
   }

   public getTripId(id: number): Observable<Trip>{
    return this.http.get<Trip>(`${this.url}/${id}`);
   }

}
