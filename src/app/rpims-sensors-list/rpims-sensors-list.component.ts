import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rpims-sensors-list',
  templateUrl: './rpims-sensors-list.component.html',
  styleUrls: ['./rpims-sensors-list.component.scss']
})

export class RpimsSensorsListComponent implements OnInit {
   sensors: Sensors;

  constructor(private http: HttpClient) { }


  public getReadings():Observable<any> {
    return this.http.get('https://rpims-monitor.herokuapp.com/thermowelltmp/');
  }

  ngOnInit() {  
    this.getReadings().subscribe((res: Sensors) => this.sensors = res);
  }
}


export interface Sensors {
  thermowellTemperatureReadings: number;
  roomTemperatureReadings: number;
}