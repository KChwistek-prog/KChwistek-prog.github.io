import { Component, OnInit } from '@angular/core';
import { ReadingsService } from 'src/app/service/readings.service';
import { Sensors } from 'src/app/model/sensors';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.scss']
})
export class ReadingsComponent implements OnInit {
  sensors!: Sensors;

  constructor(private readings: ReadingsService) { }

  ngOnInit(): void {
    this.readings.getReadings().subscribe((res: Sensors) => this.sensors = res);

  }

}
