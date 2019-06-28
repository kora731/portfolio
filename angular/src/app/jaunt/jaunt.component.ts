import {AfterViewChecked, Component, OnInit} from '@angular/core';
import * as Loading from '../../assets/js/scripts.js'

@Component({
  selector: 'app-jaunt',
  templateUrl: './jaunt.component.html',
  styleUrls: ['./jaunt.component.less']
})
export class JauntComponent implements OnInit, AfterViewChecked {

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
