import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

// service is responsible for handling http reqs
export class HelloService {

  private apiUrl = 'http://localhost:8080/hello';

  constructor(private http: HttpClient ) { } // http is initialized automatically w this syntax

  getHelloMessage(): Observable<string> {
    // httpClient sends http reqs
    return this.http.get(this.apiUrl, {responseType: 'text'}); // sends req to url thats assigned to apiurl
  }
}
