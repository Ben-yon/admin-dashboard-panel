import { DashboardService } from './../../module/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart: any = [];
  cards: any = [];

  constructor(private dashBoard: DashboardService) { }

  ngOnInit(): void {
    this.bigChart = this.dashBoard.bigChart();
    this.cards = this.dashBoard.cards();
  }

}
