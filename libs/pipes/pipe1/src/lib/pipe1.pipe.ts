import { NgModule, Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1',
  pure: true,
})
export class Pipe1Pipe implements PipeTransform {
  public transform(path: string): string {
    return path;
  }
}

@NgModule({
  declarations: [Pipe1Pipe],
  exports: [Pipe1Pipe],
})
export class Pipe1PipeModule {}
