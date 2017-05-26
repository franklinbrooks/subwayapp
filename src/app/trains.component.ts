import { Component, OnInit } from '@angular/core';

import { Train } from './train';
import { TrainsService } from './trains.service';
import { SearchPipe } from './pipe.search';

@Component({
  selector: 'my-trains',
  templateUrl: '../partials/trains.html',
  styleUrls: ['../css/trains.css'],
  providers: [TrainsService]
})

export class TrainsComponent implements OnInit {
  title = 'See Details About Each Subway Train Line';
  trains = TRAINS;
  currentTrain: Train;
  type: string;

  constructor(private trainsService: TrainsService) {
    this.type = "image/png"
  }

  getTrains(): void {
    this.trainsService.getTrains().then(trains => this.trains = trains);
  }

  showTrain(item) {
    this.currentTrain = item;
  }

  ngOnInit(): void {
    this.getTrains();
  }

  goBack(): void {
    this.currentTrain = null;
  }
}
var TRAINS: Train[];
