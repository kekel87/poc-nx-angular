import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'poc-nx-angular-ui2',
  templateUrl: './ui2.component.html',
  styleUrls: ['./ui2.component.scss']
})
export class Ui2Component {}

@NgModule({
  declarations: [Ui2Component],
  exports: [Ui2Component],
  imports: [],
})
export class Ui2Module {}
