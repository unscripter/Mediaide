import { Component,OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { routes } from './app.routing.module';
import { CommonService } from './common.service';
import { options, isAuthorized } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private options: any;
  token: any; 
  constructor(private router: Router, private _commanService: CommonService ) {
    this.options = options
  }
  ngOnInit(){
    this._commanService.startBlockUI('Loading');    
    this._commanService.scrollToTop();
    this._commanService.stopBlockUI();   
  }

  onDeactivate() {
      window.scrollTo(0, 0);
  }
  
} 
