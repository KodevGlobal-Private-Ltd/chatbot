import { Component, OnInit, AfterViewInit } from '@angular/core';
// import PerfectScrollbar from 'perfect-scrollbar';
import { recentActivitiesData, recentCustomersData } from '../../shared/data/dashboard/dashboard';
import * as chartData from '../../shared/data/charts/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {



  recentActivities = recentActivitiesData;
  recentCustomers = recentCustomersData;

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {

  }

  public ApexData1:Partial<any> | any = chartData.ApexData1;
  public ApexData2:Partial<any> | any = chartData.ApexData2;
  public ApexData3:Partial<any> | any = chartData.ApexData3;
  public ApexData4:Partial<any> | any = chartData.ApexData4;
  public echartLineBarOption:Partial<any> = chartData.echartLineBarOption;


}
