import { Component, OnInit } from '@angular/core';
import * as Loading from '../../assets/js/scripts.js'
import {IsotopeOptions} from "ngx-isotope";

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.less']
})
export class GraphicComponent implements OnInit {
  option: IsotopeOptions = {
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-item'
    }
  };

  constructor() { }

  ngOnInit() {
    setTimeout((_) => {
      Loading();
    }, 200)
  }

}
