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

  works = [
    {
      image: 'assets/images/graphic-logo.png'
    },
    {
      image: 'assets/images/graphic-logo-2.png'
    },
    {
      image: 'assets/images/3d-art.png'
    },
    {
      image: 'assets/images/wc-1.png'
    },
    {
      image: 'assets/images/wc-2.png'
    },
    {
      image: 'assets/images/wc-3.png'
    }
  ];
  constructor() { }

  ngOnInit() {
    setTimeout((_) => {
      Loading();
    }, 200)
  }

}
