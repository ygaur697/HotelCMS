import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../Hotel';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HotelService } from '../hotel.service';
@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  hotel: Hotel;
  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private location: Location
  ) { }

  ngOnInit() {
    this.gethotel()
  }

  gethotel(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.hotelService.getHotel(name)
      .subscribe(hotel => this.hotel = hotel);

  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.hotelService.updateHotel(this.hotel)
      .subscribe(() => this.goBack());
  }
}
