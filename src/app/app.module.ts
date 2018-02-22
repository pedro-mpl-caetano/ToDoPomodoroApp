import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { OptionsComponent } from './options/options.component';
import { ControlComponent } from './control/control.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    OptionsComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
