import { Component, OnInit } from '@angular/core';
import { Hotel } from '../Hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  hotels: Hotel[] = [];
  constructor(private hotelservice: HotelService) { }

  ngOnInit() {
    this.gethotels();
  }
  gethotels(): void {
    this.hotelservice.getHotels()
      .subscribe(data => this.hotels = data);
  }
}
