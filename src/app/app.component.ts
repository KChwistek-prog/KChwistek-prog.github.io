import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string;

  constructor(private http: HttpClient) {
  this.title = 'rPiMS-Front';
  }

     sensors: Sensors;

    public getReadings():Observable<any> {
      return this.http.get('https://rpims-monitor.herokuapp.com/thermowelltmp/');
    }

    public gerCarbonationPressure():Observable<any>{
      return this.http.get('https://rpims-monitor.herokuapp.com/carbonation/{temperature}&{desiredCarb}');
    }

    ngOnInit() {
      this.getReadings().subscribe((res: Sensors) => this.sensors = res);
    }
}

export interface Sensors {
  thermowellTemperatureReadings: number;
  roomTemperatureReadings: number;
}
