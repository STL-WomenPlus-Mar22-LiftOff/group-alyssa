import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl:string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:8080/user";
  }

  authentication(user: any)  {
    return this.httpClient.post(`${this.baseUrl}/authentication`, user);
  }

  isUserLoggedIn()  {
    let user = sessionStorage.getItem('id');
    return !(user === null);
  }

  logOut()  {
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('tripId');
    return console.log("User successfully logged out.");
  }

  getUserByUsername(username: string): Observable<JSON>{
    return this.httpClient.get<JSON>(`${this.baseUrl}/${username}`);
  }

}
