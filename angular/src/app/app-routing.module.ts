import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {JauntComponent} from "./jaunt/jaunt.component";
import {PathFinderComponent} from "./path-finder/path-finder.component";
import {NudgeComponent} from "./nudge/nudge.component";
import {PipelineComponent} from "./pipeline/pipeline.component";
import {FirstExperienceComponent} from "./first-experience/first-experience.component";
import {ShopperMXComponent} from "./shopper-mx/shopper-mx.component";
import {WebSiteComponent} from "./web-site/web-site.component";
import {VisualizationsComponent} from "./visualizations/visualizations.component";
import {GraphicComponent} from "./graphic/graphic.component";


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'jaunt',
    component: JauntComponent

  },
  {
    path: 'pathFinder',
    component: PathFinderComponent

  },
  {
    path: 'nudge',
    component: NudgeComponent

  },
  {
    path: 'pipeline',
    component: PipelineComponent

  },
  {
    path: 'firstExperience',
    component: FirstExperienceComponent

  },
  {
    path: 'shopper',
    component: ShopperMXComponent
  },
  {
    path: 'webSite',
    component: WebSiteComponent
  },
  {
    path: 'visualizations',
    component: VisualizationsComponent
  },
  {
    path: 'graphic',
    component: GraphicComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 0] // [x, y]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
