import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Weather {
  private apiKey = 'dba8117fd2604ff5b7b44805252310';
  private apiURL = 'https://api.weatherapi.com/v1/current.json';

  constructor(private http: HttpClient){}

  getWeather(city: string): Observable<any>{
    const url = `${this.apiURL}?key=${this.apiKey}&q=${city}`;
    return this.http.get(url);
  }
}

//https://api.weatherapi.com/v1/current.json?key=dba8117fd2604ff5b7b44805252310&q=London