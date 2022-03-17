import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Sensors } from '../model/sensors';
import { Pressure } from '../model/pressure';

@Injectable({
  providedIn: 'root'
})
export class ReadingsService {
  private url: String;

  constructor(private http: HttpClient) {
    this.url = 'https://rpims-monitor.herokuapp.com/'
  }

  public getReadings(): Observable<Sensors> {
    return this.http.get<Sensors>(this.url + 'readDataFromPiSensors');
  }

  public getCarbonationPressure(temperature: number, desiredCarb: number): Observable<Pressure> {
    return this.http.get<Pressure>(this.url + 'carbonation/' + temperature + '&' + desiredCarb);
  }
}

