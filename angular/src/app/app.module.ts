import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import {ResumeComponent} from "./home/resume/resume.component";
import {HeaderComponent} from "./home/header/header.component";
import {ContactComponent} from "./home/contact/contact.component";
import {DesignProcessComponent} from "./home/design-process/design-process.component";
import {FooterbarComponent} from "./home/footerbar/footerbar.component";
import {CaseStudyComponent} from "./home/case-study/case-study.component";
import {AboutComponent} from "./home/about/about.component";
import { JauntComponent } from './jaunt/jaunt.component';
import {WorkContainerComponent} from "./home/work-container/work-container.component";

import { IsotopeModule } from 'ngx-isotope';
import { PathFinderComponent } from './path-finder/path-finder.component';
import { NudgeComponent } from './nudge/nudge.component';
import { PipelineComponent } from './pipeline/pipeline.component';
import { FirstExperienceComponent } from './first-experience/first-experience.component';
import { ShopperMXComponent } from './shopper-mx/shopper-mx.component';
import { WebSiteComponent } from './web-site/web-site.component';
import { VisualizationsComponent } from './visualizations/visualizations.component';
import { GraphicComponent } from './graphic/graphic.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResumeComponent,
    CaseStudyComponent,
    DesignProcessComponent,
    WorkContainerComponent,
    ContactComponent,
    FooterbarComponent,
    HeaderComponent,
    NavBarComponent,
    HomeComponent,
    JauntComponent,
    PathFinderComponent,
    NudgeComponent,
    PipelineComponent,
    FirstExperienceComponent,
    ShopperMXComponent,
    WebSiteComponent,
    VisualizationsComponent,
    GraphicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IsotopeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
