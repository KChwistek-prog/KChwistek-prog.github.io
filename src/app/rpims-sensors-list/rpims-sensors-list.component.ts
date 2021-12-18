import { Component, OnInit } from '@angular/core';
import { RpimsSensors } from '../model/rpimsSensors';
import { RpimsSensorsService } from '../rpims-sensors-service/rpims-sensors-service.service';

@Component({
  selector: 'app-rpims-sensors-list',
  templateUrl: './rpims-sensors-list.component.html',
  styleUrls: ['./rpims-sensors-list.component.scss']
})
export class RpimsSensorsListComponent implements OnInit {

  rpimsSensors!: RpimsSensors[];

  constructor(private service:RpimsSensorsService ) {
   }

  ngOnInit() {
  this.service.getReadings().subscribe(data => {this.rpimsSensors = data;
  });
  }

}
