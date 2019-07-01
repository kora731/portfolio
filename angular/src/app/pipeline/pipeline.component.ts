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

  constructor() { }

  ngOnInit() {
    setTimeout((_) => {
      Loading();
    }, 200)
  }

}
