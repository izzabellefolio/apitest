import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Weather {
  private apiKey = 'a0a2115ccac8c431e811db7befcf8ef8';
  private apiURL = '/api/current';

  constructor(private http: HttpClient){}

  getWeather(city: string): Observable<any>{
    const url = `${this.apiURL}?access_key=${this.apiKey}&query=${city}`;
    return this.http.get(url);
  }
}

//ng serve --proxy-config src/proxy.conf.json
//http://api.weatherstack.com/current?access_key=a0a2115ccac8c431e811db7befcf8ef8&query=New%20York