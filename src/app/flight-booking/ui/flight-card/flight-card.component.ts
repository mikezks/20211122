import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Flight } from '../../../entities/flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent {
  @Input() item: Flight | undefined;
  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter();

  toggleSelection(): void {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
