import {AfterViewInit, Component, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.less']
})
export class CaseStudyComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout((_) => {
      $(".twentytwenty-container").twentytwenty({default_offset_pct: 0.3});
      $(document).on('mousedown','.twentytwenty-handle',function(){
        $('.twentytwenty-handle').addClass('remove-poi');

      });
    }, 200);
  }
}
