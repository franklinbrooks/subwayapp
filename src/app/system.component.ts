import { Component, OnInit } from '@angular/core';

import { Train } from './train';
import { TrainsService } from './trains.service';

@Component({
  selector: 'my-system',
  templateUrl: '../partials/system.html',
  styleUrls: ['../css/system.css'],
  providers: [TrainsService]
})

export class SystemComponent implements OnInit {
  private mySort = [];
  trains = TRAINS;
  title = 'Total System Stats';
  highlightedDiv: number;
  currentView = null;
  stations: any = 0;
  stock: any = 0;
  ontime: any = 0;
  rating: any = 0;
  rated: any = 0;
  currentSort = null;
  arrayReturned = false;
  byStations: any = [];
  byYear: any = [];
  byStock: any = [];
  byOntime: any = [];
  byRating: any = [];

  constructor(private trainsService: TrainsService) {
  }

   makeActive(newValue: number) {
    if ((this.highlightedDiv === null) && (this.currentView === null)) {
      this.highlightedDiv = newValue; // initial selection
    } else if ((this.highlightedDiv === newValue) && (this.currentView === newValue)) {
      this.highlightedDiv = newValue; // keep current selection
    } else {
      this.highlightedDiv = newValue; // highlight new selection
      this.currentView = newValue;
    }
  }

  getTrains(): void {
    this.trainsService.getTrains().then(trains => this.trains = trains);
  }

  ngOnInit(): void {
    this.getTrains();
  }

  sortByName(): void {
    this.arrayReturned = false;
    this.currentSort = 1;
    this.mySort = [];
    this.getTrains();
    this.mySort = this.trains;
    this.arrayReturned = true;
    this.makeActive(1);
  }

  sortByStations(): void {
    this.arrayReturned = true;
    this.currentSort = 2;
    this.mySort = [];
    this.stations = 0;
    for (var i = 0; i < this.trains.length; i++) {
      this.stations =  this.stations + this.trains[i].stations;
      this.mySort.push([this.trains[i].name, this.trains[i].stations, this.trains[i].color, this.trains[i].backgroundColor]);
    }
    this.mySort.sort(function(a, b) {
        return a[1] - b[1];
    });
    this.mySort = this.mySort.reverse();
    this.makeActive(2);
  }

  sortByYear(): void {
    this.arrayReturned = true;
    this.currentSort = 3;
    this.mySort = [];
    for (var i = 0; i < this.trains.length; i++) {
      this.mySort.push([this.trains[i].name, this.trains[i].opened, this.trains[i].color, this.trains[i].backgroundColor]);
    }
    this.mySort.sort(function(a, b) {
        return a[1] - b[1];
    });
    this.makeActive(3);
  }

  sortByStock(): void {
    this.arrayReturned = true;
    this.currentSort = 4;
    this.mySort = [];
    this.stock = 0;
    for (var i = 0; i < this.trains.length; i++) {
      this.stock =  this.stock + this.trains[i].stock;
      this.mySort.push([this.trains[i].name, this.trains[i].stock, this.trains[i].color, this.trains[i].backgroundColor]);
    }
    this.mySort.sort(function(a, b) {
        return a[1] - b[1];
    });
    this.mySort.reverse();
    this.makeActive(4);
  }

  sortByOntime(): void {
    this.arrayReturned = true;
    this.currentSort = 5;
    this.mySort = [];
    this.ontime = 0;
    for (var i = 0; i < this.trains.length; i++) {
      if (this.trains[i].ontime !== null ) {
      this.ontime =  this.ontime + this.trains[i].ontime;
      }
      this.mySort.push([this.trains[i].name, this.trains[i].ontime, this.trains[i].color, this.trains[i].backgroundColor]);
    }
    this.mySort.sort(function(a, b) {
        return a[1] - b[1];
    });
    this.mySort.reverse();
    this.ontime = this.ontime / this.trains.length;
    this.ontime = this.ontime.toFixed(2);
    this.makeActive(5);
  }

  sortByRating(): void {
    this.arrayReturned = true;
    this.currentSort = 6;
    this.mySort = [];
    this.rating = 0;
    for (var i = 0; i < this.trains.length; i++) {
      if (this.trains[i].rating !== null ) {
        this.rated = this.rated +1;
        this.rating =  this.rating + this.trains[i].rating;
       }
      this.mySort.push([this.trains[i].name, this.trains[i].rating, this.trains[i].color, this.trains[i].backgroundColor]);
    }
    this.mySort.sort(function(a, b) {
        return a[1] - b[1];
    });
    this.mySort.reverse();
    this.rating = this.rating / this.rated;
    this.rating = this.rating.toFixed(2);
    this.makeActive(6);
  }

}

var TRAINS: Train[];
