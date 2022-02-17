import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ui1Module } from '@poc-nx-angular/components/ui1';
import { Ui2Module } from '@poc-nx-angular/components/ui2';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Ui1Module, Ui2Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
