import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    FlightBookingModule
  ],
  providers: [
    /* { provide: FlightService, useClass: DefaultFlightService } */
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
