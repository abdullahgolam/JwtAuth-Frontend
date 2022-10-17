import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl: string = 'http://localhost:8000/api/login/'

  constructor(private http: HttpClient) {
  }

  login(val: any) {
    return this.http.post(this.loginUrl, val)
  }

}
