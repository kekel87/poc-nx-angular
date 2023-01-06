import { Component, NgModule } from '@angular/core';
import { Pipe1PipeModule } from '@poc-nx-angular/pipes/pipe1';

@Component({
  selector: 'poc-nx-angular-ui1',
  templateUrl: './ui1.component.html',
  styleUrls: ['./ui1.component.scss'],
})
export class Ui1Component {}

@NgModule({
  declarations: [Ui1Component],
  exports: [Ui1Component],
  imports: [Pipe1PipeModule],
})
export class Ui1Module {}
