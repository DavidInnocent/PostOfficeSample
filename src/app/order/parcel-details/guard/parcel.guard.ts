import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';

@Injectable({
  providedIn: 'root'
})
export class ParcelGuard implements CanActivate {
  constructor(public dataService:DataSharingService,public router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.dataService.getParcel()==null){
        this.router.navigateByUrl('dashboard');
        return false
      }
    return true;
  }
  
}
