import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReadingsService {

  constructor(private http:HttpClient) { }

  public getReadings(): Observable<any> {
    return this.http.get('https://rpims-monitor.herokuapp.com/thermowelltmp/');
  }
}

