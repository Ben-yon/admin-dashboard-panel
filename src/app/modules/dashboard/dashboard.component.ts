import { DashboardService } from './../../module/dashboard.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PeriodElements } from 'src/app/models/period-elements';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild( MatPaginator ) paginator!: MatPaginator;
  bigChart: any = [];
  cards: any = [];
  pieCharts: any = [];

  constructor(private dashBoard: DashboardService) { }

  ngOnInit(): void {
    this.bigChart = this.dashBoard.bigChart();
    this.cards = this.dashBoard.cards();
    this.pieCharts = this.dashBoard.pieCharts();

  }
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    
  }
  DATA_ELEMENTS: PeriodElements[] = [
    {position: 1, name:'Hydrogen', weight: 1.00079},
    {position: 2, name: 'Helium', weight: 4.0026},
    {position: 3, name: 'Lithium', weight: 6.941},
    {position: 4, name: 'Beryllium', weight: 9.0122},
    {position: 5, name: 'Boron', weight: 10.811},
    {position: 6, name: 'Carbon', weight: 12.0107},
    {position: 7, name: 'Nitrogen', weight: 14.0067},
    {position: 8, name: 'Oxygen', weight: 15.9994},
    {position: 9, name: 'Fluorine', weight: 18.9984},
    {position: 10, name: 'Neon', weight: 20.1797},
];
displayedColumns: string[] = ['position','name', 'weight'];
dataSource = new MatTableDataSource(this.DATA_ELEMENTS);


applyFilter( filterValue: string){
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

}
