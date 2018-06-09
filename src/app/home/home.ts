import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home {
  constructor(private _commonService: CommonService) { }
}
