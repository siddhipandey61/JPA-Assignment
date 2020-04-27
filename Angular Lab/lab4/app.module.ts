import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Newcomp1Component } from './newcomp1/newcomp1.component';
import { TwowayComponent } from './twoway/twoway.component';

import { NgIfcompComponent } from './ng-ifcomp/ng-ifcomp.component';
import { Lab22Component } from './lab22/lab22.component';
import { NestcompdemoComponent } from './nestcompdemo/nestcompdemo.component';

import { CustomDirectiveDemoComponent } from './custom-directive-demo/custom-directive-demo.component';
import { CustdirectiveDirective } from './custom-directive-demo/custdirective.directive';
import { HostlistenerComponent } from './hostlistener/hostlistener.component';
import { HostDirective } from './hostlistener/host.directive';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { FilterDemoComponent } from './filter-demo/filter-demo.component';

import { FilterpipePipe } from './filter-demo/filterpipe.pipe';
import { ServiceuseComponent } from './serviceuse/serviceuse.component';
import { TemplateFormDemoComponent } from './template-form-demo/template-form-demo.component';
//import { BooklistComponent } from './booklist/booklist.component';
//import { BookService } from './books.service';





@NgModule({
  declarations: [
    AppComponent,
    Newcomp1Component,
    TwowayComponent,
    NgIfcompComponent,
    Lab22Component,
    NestcompdemoComponent,
    CustomDirectiveDemoComponent,
    CustdirectiveDirective,
    HostlistenerComponent,
    HostDirective,
    PipedemoComponent,
    FilterDemoComponent,
    FilterpipePipe,
    ServiceuseComponent,
    TemplateFormDemoComponent,
   // BooklistComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
