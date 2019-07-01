import { Component, OnInit } from '@angular/core';
import { IsotopeOptions } from 'ngx-isotope';

@Component({
  selector: 'app-work-container',
  templateUrl: './work-container.component.html',
  styleUrls: ['./work-container.component.less']
})
export class WorkContainerComponent implements OnInit {
  option: IsotopeOptions = {
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-item'
    }
  };

  filterList = [
    {
      text: 'All Projects',
      key: '',
      active: true
    },
    {
      text: 'Design System',
      key: 'cat-1'
    },
    {
      text: 'Experience Map',
      key: 'cat-2'
    },
    {
      text: '3D',
      key: 'cat-3'
    },
    {
      text: 'Graphics',
      key: 'cat-4'
    }
  ];

  selectedFilter = this.filterList[0];

  works = [
    {
      routerLink: 'pathFinder',
      image: 'assets/images/w1-q-pf.png',
      title: 'PathFinder',
      subTitle: '#design-system #web',
      filter: 'cat-1 cat-2'
    },
    {
      routerLink: 'nudge',
      image: 'assets/images/w2-q-mobile.png',
      title: 'Mobile + Nudge',
      subTitle: '#journey #mobile',
      filter: 'cat-2'
    },
    {
      routerLink: 'pipeline',
      image: 'assets/images/w3-jaunt-cover.png',
      title: 'Video Production Pipeline',
      subTitle: '#3d #design-system #web',
      filter: 'cat-1 cat-2 cat-3'
    },
    {
      routerLink: 'jaunt',
      image: 'assets/images/w4-jaunt-app.png',
      title: 'Camera Media Manager',
      subTitle: '#journey #desktop',
      filter: 'cat-3'
    },
    {
      routerLink: 'firstExperience',
      image: 'assets/images/w5-adsk.png',
      title: 'First Experience',
      subTitle: '#journey #desktop',
      filter: 'cat-2'
    },
    {
      routerLink: 'shopper',
      image: 'assets/images/w7-smx.png',
      title: 'ShopperMX',
      subTitle: '#design-system #3d #web',
      filter: 'cat-1 cat-2 cat-3'
    },
    {
      routerLink: 'webSite',
      image: 'assets/images/w6-web.png',
      title: 'Website Designs',
      subTitle: '#graphics #web',
      filter: 'cat-4'
    },
    {
      routerLink: 'visualizations',
      image: 'assets/images/w8-dqs.png',
      title: 'Data Visualizations',
      subTitle: '#data-viz #graphics',
      filter: 'cat-4'
    },
    {
      routerLink: 'graphic',
      image: 'assets/images/w9-wc.png',
      title: 'Graphic Design<',
      subTitle: '#3d #graphics',
      filter: 'cat-3 cat-4'
    }
  ];

  filtedWorks = this.works;

  constructor() { }

  ngOnInit() {
  }

  onFilter(filter) {
    if (this.selectedFilter !== filter) {
      this.selectedFilter.active = false;
      filter.active = true;
      this.selectedFilter = filter;
      this.filtedWorks = [];
      setTimeout((_) => {
        this.filtedWorks = this.works.filter(work =>
          work.filter.indexOf(this.selectedFilter.key) >= 0)
      });
    }
  }
}
