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
  public commanService: CommonService;
  constructor(private router: Router) {
  }
  ngOnInit(){
    // this.router.navigate(['']);
  }
} 
