import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ui2Module } from '@poc-nx-angular/components/ui2';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Ui2Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
