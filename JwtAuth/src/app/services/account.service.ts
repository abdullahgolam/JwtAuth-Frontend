import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl: string = 'http://localhost:8000/api/'

  constructor(private http: HttpClient) { }

  userData(){
    return this.http.get(this.baseUrl+'/userData')
  }
}
