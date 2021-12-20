import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rpims-sensors-list',
  templateUrl: './rpims-sensors-list.component.html',
  styleUrls: ['./rpims-sensors-list.component.scss']
})

export class RpimsSensorsListComponent implements OnInit {

  rpimsSensors: RpimsSensors | undefined;
  private rpimsHerokuAddress: string;

  constructor(private http: HttpClient) {
    this.rpimsHerokuAddress = 'https://rpims-monitor.herokuapp.com/thermowelltmp/';
  }

  public getReadings() {
    return this.http.get<RpimsSensors>(this.rpimsHerokuAddress);
  }

  ngOnInit() {
    this.getReadings()
      .subscribe((data: RpimsSensors) => this.rpimsSensors = {...data});
  }

}

export interface RpimsSensors {
  thermowellTemperatureReadings: string;
  roomTemperatureReadings: string;
}
