import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { GchartsComponent } from './gcharts/gcharts.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    GchartsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
