import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from './trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private baseUrl:string;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:8080/trip";
   }

   public addTrip(trip: Trip) {
    return this.http.post<Trip>(this.baseUrl, trip);
   }

   public getTrip(): Observable<Trip[]>{
    return this.http.get<Trip[]>(`${this.baseUrl}`);
   }

   public getAllTrips(): Observable<Trip[]>{
    return this.http.get<Trip[]>(this.baseUrl);
   }
   
   public getTripIdByUserId(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/user/${id}`);
   }

   public getTripById(id: number): Observable<Trip>{
    return this.http.get<Trip>(`${this.baseUrl}/find/${id}`);
   }

}
