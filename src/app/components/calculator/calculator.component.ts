import { Component, OnInit } from '@angular/core';
import { ReadingsService } from 'src/app/service/readings.service';
import { Pressure } from 'src/app/model/pressure';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  beer_temp!: number;
  desired_carbonation!: number;
  required_bar: Pressure;

  constructor(private service: ReadingsService) {
    this.required_bar = {} as Pressure
   }

  onSubmit() {
    this.service.getCarbonationPressure(this.beer_temp, this.desired_carbonation)
    console.log(this.beer_temp, this.desired_carbonation, this.required_bar)
  }

  ngOnInit(): void {
  }

}
