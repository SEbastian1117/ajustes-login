import { Component } from '@angular/core';


@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent {
  customerAmount: number = 5000
  myData: number[] =[100, 500, 1000]
}
