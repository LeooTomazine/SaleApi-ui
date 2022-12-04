import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {ToolbarModule} from 'primeng/toolbar';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ToolbarModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
