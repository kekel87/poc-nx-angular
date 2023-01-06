import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Ui1Module } from '@poc-nx-angular/components/ui1';
import { Ui2Module } from '@poc-nx-angular/components/ui2';
import { Pipe1PipeModule } from '@poc-nx-angular/pipes/pipe1';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Ui1Module, Ui2Module, Pipe1PipeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
