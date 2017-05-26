import { Injectable } from '@angular/core';

import { Train } from './train';
import { TRAINS } from './mock-trains';

@Injectable()
export class TrainsService {
  getTrains(): Promise<Train[]> {
    return Promise.resolve(TRAINS);
  }
}
