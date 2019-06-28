import {AfterViewChecked, Component, OnInit} from '@angular/core';
import * as Loading from '../../assets/js/scripts.js'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, AfterViewChecked {

  load = true;
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewChecked() {
    if(this.load) {
      Loading();
      this.load = false;
    }
  }

}
