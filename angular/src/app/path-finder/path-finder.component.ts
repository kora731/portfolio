import { Component, OnInit } from '@angular/core';
import * as Loading from '../../assets/js/scripts.js'

@Component({
  selector: 'app-path-finder',
  templateUrl: './path-finder.component.html',
  styleUrls: ['./path-finder.component.less']
})
export class PathFinderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout((_) => {
      Loading();
    }, 200)
  }
}
