import { Component, OnInit } from '@angular/core';
import { Hotel } from '../Hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotels: Hotel[];

  constructor(private hotelservice: HotelService) { }

  getHotels(): void {
    this.hotelservice.getHotels()
      .subscribe(data => this.hotels = data);
  }
  add(name: string): void {
    name = name.trim();

    if (!name) { return; }
    this.hotelservice.addhotel({ name } as Hotel)
      .subscribe(hotel => {
        this.hotels.push(hotel);
      });
  }






  ngOnInit() {
    this.getHotels();
  }


}
