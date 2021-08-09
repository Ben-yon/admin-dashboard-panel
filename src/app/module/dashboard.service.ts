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
  pieCharts(){
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
  }, {
      name: 'Internet Explorer',
      y: 11.84
  }, {
      name: 'Firefox',
      y: 10.85
  }, {
      name: 'Edge',
      y: 4.67
  }, {
      name: 'Safari',
      y: 4.18
  }, {
      name: 'Sogou Explorer',
      y: 1.64
  }, {
      name: 'Opera',
      y: 1.6
  }, {
      name: 'QQ',
      y: 1.2
  }, {
      name: 'Other',
      y: 2.61
  }]
  }
}
