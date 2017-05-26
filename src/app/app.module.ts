import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { HttpModule }             from '@angular/http';

import { AppComponent }           from './app.component';
import { AboutComponent }         from './about.component';
import { TrainsComponent }        from './trains.component';
import { SystemComponent }        from './system.component';

import { AppRoutingModule }       from './app-routing.module';
import { SearchPipe } from './pipe.search';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    TrainsComponent,
    SystemComponent,
    SearchPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

