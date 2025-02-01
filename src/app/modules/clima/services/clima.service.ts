import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  private apiKey = 'a9838a9dad38bc8de32d7e99f9f4678c'


  constructor(private http: HttpClient) {}

  getWeatherDatas(city: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=json&appid=${this.apiKey}`);
  }

}
