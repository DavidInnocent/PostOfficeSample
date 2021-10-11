import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Parcel } from 'src/app/models/Parcel';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';

@Component({
  selector: 'app-parcel-details',
  templateUrl: './parcel-details.component.html',
  styleUrls: ['./parcel-details.component.scss']
})
export class ParcelDetailsComponent implements OnInit {

  dataService: DataSharingService;
  

  router: Router;
  parcel!:Parcel;
  constructor(dataService: DataSharingService,router:Router) {
    this.dataService = dataService;
    this.router=router;
    }

  ngOnInit(): void {
    this.parcel=this.dataService.getParcel();
  }
  
  returnHome(){
    this.router.navigateByUrl('/dashboard');
  }

}