import { Component,OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { routes } from './app.routing.module';
import { CommonService, ServiceEndPoints } from './common.service';
import { options, isAuthorized } from './app.model';
import { CommonAPIService } from './app.api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private options: any;
  token: any; 
  constructor(private router: Router, private _commanService: CommonService, private _apiService: CommonAPIService) {
    this.options = options
  }
  ngOnInit(){
    this._commanService.startBlockUI('Loading');    
    this._commanService.scrollToTop();
    this._commanService.stopBlockUI(); 
    if(!(this._commanService.getFromSessionStorage('package-data'))){  
    this.getEstimateDetails();
    }
  }

  onDeactivate() {
      window.scrollTo(0, 0);
  }

  getEstimateDetails() {
    return this._apiService.get(ServiceEndPoints.GetAQuote)
      .subscribe(res => {
        let PackageData = res.json();
        this._commanService.storeInSessionStorage('package-data', PackageData);
      });
    }
  
} 
