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

  authenticate(user: any)  {
    return this.httpClient.post(this.baseUrl, user);
  }

}
