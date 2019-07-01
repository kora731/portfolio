import { Component, OnInit } from '@angular/core';
import * as Loading from '../../assets/js/scripts.js'

@Component({
  selector: 'app-shopper-mx',
  templateUrl: './shopper-mx.component.html',
  styleUrls: ['./shopper-mx.component.less']
})
export class ShopperMXComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout((_) => {
      Loading();
    }, 200)
  }
}
