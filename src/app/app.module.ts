import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { GoalshigherComponent } from './goalshigher/goalshigher.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalshigherComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatCardModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
