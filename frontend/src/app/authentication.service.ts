import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl:string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:8080/user/authentication";
  }

  authentication(user: any)  {
    return this.httpClient.post(this.baseUrl, user);
  }

  isUserLoggedIn()  {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut()  {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('id');
    return console.log("User successfully logged out.");
  }

}
