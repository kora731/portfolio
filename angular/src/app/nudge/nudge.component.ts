import { Component, OnInit } from '@angular/core';
import * as Loading from '../../assets/js/scripts.js'

@Component({
  selector: 'app-nudge',
  templateUrl: './nudge.component.html',
  styleUrls: ['./nudge.component.less']
})
export class NudgeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout((_) => {
      Loading();
    }, 200)
  }
}
