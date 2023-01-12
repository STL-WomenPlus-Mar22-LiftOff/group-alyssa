import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl:string;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:8080/user";
   }

   //below should ALL mirror what is on the UserResource.java file (on the backend) as what each does, and the url it returns and .get, .post, etc.

   //returns all users at http://localhost:8080/user/all
   public getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`);
   }

   //get one single user
   public getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
   }

   //add user; returns only that User object, instead of an array
   public addUser(user: User) {
    return this.http.post<User>(this.baseUrl, user);
   }

   public updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/update`, user);
   }

   //delete user by id; void as it's returning nothing
   public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${userId}`);
   }


}
