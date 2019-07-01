import { Component, OnInit } from '@angular/core';
import * as Loading from '../../assets/js/scripts.js'

@Component({
  selector: 'app-first-experience',
  templateUrl: './first-experience.component.html',
  styleUrls: ['./first-experience.component.less']
})
export class FirstExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout((_) => {
      Loading();
    }, 200)
  }
}
