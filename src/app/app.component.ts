import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { routes } from './app.routing.module';
import { CommonService } from './common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private commanService: CommonService ) {
  }
  ngOnInit(){
    this.commanService.startBlockUI('Loading');    
    // this.router.navigate(['']);
    this.commanService.stopBlockUI();
  }

  onDeactivate() {
      window.scrollTo(0, 0);
  }
  
} 
