import { Component, OnInit } from '@angular/core';
import * as Loading from '../../assets/js/scripts.js'

@Component({
  selector: 'app-visualizations',
  templateUrl: './visualizations.component.html',
  styleUrls: ['./visualizations.component.less']
})
export class VisualizationsComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    setTimeout((_) => {
      Loading();
    }, 200)
  }
}
