import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'http://localhost:8080/weather?city=';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<string> {
    return this.http.get(this.apiUrl + city, { responseType: 'text' });
  }
}
