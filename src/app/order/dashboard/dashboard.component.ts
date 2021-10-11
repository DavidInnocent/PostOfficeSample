import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';
import { Parcel } from 'src/app/models/Parcel'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  parcelsObservable = new Observable<Parcel[]>();

 
 
  
  selectedpackage!: string;
  selectedpackageIndex!: number;
  
  dashboardService: DashboardService
  router!: Router;
  dataSharingService: DataSharingService;
 
  
  

  constructor(dashboardService: DashboardService,router: Router,dataSharingService:DataSharingService) {
    this.dashboardService=dashboardService;
    this.router=router;
    this.dataSharingService=dataSharingService;
  }

  ngOnInit(): void {
    this.parcelsObservable=this.dashboardService.parcels;
  }


  packageDetails(parcel:Parcel) {
    this.dataSharingService.setParcel(parcel);
    this.router.navigateByUrl('parcel_details');
  }
  packageDetailsAdd() {
    this.dataSharingService.setParcelAdd();
    this.router.navigateByUrl('parcel_details');
  }

}
