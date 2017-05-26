import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '../partials/app.html',
  styleUrls: ['../css/app.css']
})

export class AppComponent {
  title = 'SubwayStats';
  highlightedDiv: number;
  landingView = true;
  currentView = null;

   makeActive(newValue: number) {
    if ((this.highlightedDiv === null) && (this.currentView === null)) {
      this.highlightedDiv = newValue; // initial selection
    } else if ((this.highlightedDiv === newValue) && (this.currentView === newValue)) {
      this.highlightedDiv = newValue; // keep current selection
    } else {
      this.highlightedDiv = newValue; // highlight new selection
      this.currentView = newValue;
    }
    this.landingView = false;
  }

}

