import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }       from './about.component';
import { TrainsComponent }      from './trains.component';
import { SystemComponent }      from './system.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'   },
  { path: 'about',      component: AboutComponent  },
  { path: 'trains',     component: TrainsComponent },
  { path: 'system',     component: SystemComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
