import { Component, OnInit } from '@angular/core';
import { Flight } from './entities/flight';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Hello World!';
  flight: Flight | undefined;

  changeTitle(): void {
    this.title = 'Hi Angular! :D';
  }
}
