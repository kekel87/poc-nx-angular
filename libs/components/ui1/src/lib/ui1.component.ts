import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'poc-nx-angular-ui1',
  templateUrl: './ui1.component.html',
  styleUrls: ['./ui1.component.scss']
})
export class Ui1Component {}

@NgModule({
  declarations: [Ui1Component],
  exports: [Ui1Component],
  imports: [],
})
export class Ui1Module {}
