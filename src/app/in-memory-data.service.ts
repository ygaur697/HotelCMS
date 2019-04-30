import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hotel } from './Hotel';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const hotels = [
      {
        name: 'Winston Hotel', city: 'Delhi', locality: 'Rajachowk',
        description: 'The Hotel Hesperia is the right choice for visitors who are searching for a combination of charm, peace and quiet, and a convenient position from which to explore Venice.',
        landmark1: 'Near SBI Bank',
        landmark2: '5th Sector',
        id: 11
      },
      {
        name: 'Churchill Hotel', city: 'Delhi', locality: 'Rajachowk',
        description: 'The Hotel Hesperia is the right choice for visitors who are searching for a combination of charm, peace and quiet, and a convenient position from which to explore Venice.',
        landmark1: 'Near SBI Bank',
        landmark2: '5th Sector',
        id: 12
      },
      {
        name: 'clinton Hotel', city: 'Delhi', locality: 'Rajachowk',
        description: 'The Hotel Hesperia is the right choice for visitors who are searching for a combination of charm, peace and quiet, and a convenient position from which to explore Venice.',
        landmark1: 'Near SBI Bank',
        landmark2: '5th Sector',
        id: 13
      }

    ];
    return { hotels };

  }
  genId(hotels: Hotel[]): number {
    return hotels.length > 0 ? Math.max(...hotels.map(hotels => hotels.id)) + 1 : 11;
  }
  constructor() { }
}
