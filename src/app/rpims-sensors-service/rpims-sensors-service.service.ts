import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RpimsSensors } from '../model/rpimsSensors';
import { Observable } from 'rxjs';

@Injectable()
export class RpimsSensorsService {

  private rpimsHerokuAddress: string;

  constructor(private http: HttpClient) {
  this.rpimsHerokuAddress = 'https://rpims-monitor.herokuapp.com/thermowelltmp';
  }

  public getReadings(): Observable<RpimsSensors[]> {
    return this.http.get<RpimsSensors[]>(this.rpimsHerokuAddress);
      }
}

