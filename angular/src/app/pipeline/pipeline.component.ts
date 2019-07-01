import { Component, OnInit } from '@angular/core';
import * as Loading from '../../assets/js/scripts.js'
import {IsotopeOptions} from "ngx-isotope";

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.less']
})
export class PipelineComponent implements OnInit {
  option: IsotopeOptions = {
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-item'
    }
  };

  works = [
    {
      image: 'assets/images/jcs-sg-1.png'
    },
    {
      image: 'assets/images/jcs-sg-2.png'
    },
    {
      image: 'assets/images/jcs-sg-3.png'
    },
    {
      image: 'assets/images/jcs-sg-4.png'
    },
    {
      image: 'assets/images/jcs-sg-5.png'
    },
    {
      image: 'assets/images/jcs-sg-6.png'
    },
    {
      image: 'assets/images/jcs-sg-7.png'
    },
    {
      image: 'assets/images/jcs-sg-8.png'
    },
    {
      image: 'assets/images/jcs-sg-9.png'
    }
  ];

  constructor() { }

  ngOnInit() {
    setTimeout((_) => {
      Loading();
    }, 200)
  }

}
