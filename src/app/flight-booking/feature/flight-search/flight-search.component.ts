import { Component, OnInit } from '@angular/core';
import { Flight } from '../../../entities/flight';
import { DefaultFlightService } from '../../data-access/default-flight.service';
import { FlightService } from '../../data-access/flight.service';


/**
 * COMPONENTS:
 *
 * - Smart, Container, Feature, Use Case
 * -> Treibt den Use Case voran
 * -> verwendet UI Components
 * -> verwendet Use Case spezifische Dependency Injection (z. B. FlightService)
 *
 * - Dump, Presentational, Components, UI
 * -> Wiederverwendbar
 * -> wissen wenig über Use Case
 * -> bekommen Daten nicht über DI
 * -> sondern über @Input() und @Output()
 *
 */

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [
    /* { provide: FlightService, useClass: DefaultFlightService } */
  ]
})
export class FlightSearchComponent implements OnInit {
  from: string = 'Hamburg';
  to: string = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight | undefined;

  basket: Record<number, boolean> = {
    3: true,
    5: true
  };

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.flightService.find(this.from, this.to)
      .subscribe({
        next: flights => {
          this.flights = flights;
          console.log('My flights', { flights });
        },
        error: err => console.error('Flights loading error', err)
      });
  }

  select(flight: Flight): void {
    this.selectedFlight = (flight === this.selectedFlight ? undefined : flight);
  }
}
