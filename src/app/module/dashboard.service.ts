import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart(){
    return [{
      name: 'Asia',
      data: [190, 190, 87, 23]
    },{
      name: 'Africa',
      data:[170, 129, 32, 65]
    },{
      name: 'Europe',
      data: [155, 96, 33, 101]
    },{
      name: 'Australia',
      data: [90, 80, 95, 152]
    }]
  }
  cards(){
    return [45, 65, 86, 120];
  }
}
