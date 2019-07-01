import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input()
  set isHomePage(isHomePage: boolean) {
    this._isHomePage = isHomePage;
    this.transparentBar = isHomePage;
  }
  _isHomePage = false;
  transparentBar = false;
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    if (this._isHomePage) {
      window.addEventListener('scroll', this.scroll.bind(this), true);
    }
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll.bind(this), true);
  }

  scroll(e) {
    if (this._isHomePage && window.pageYOffset < 200) {
      this.transparentBar = true;
    } else {
      this.transparentBar = false;
    }
  }
}
