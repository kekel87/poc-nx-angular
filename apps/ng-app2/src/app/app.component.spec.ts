import {
  MockBuilder,
  MockRender,
  MockedComponentFixture,
  ngMocks,
} from 'ng-mocks';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let fixture: MockedComponentFixture<AppComponent>;

  beforeEach(async () => {
    await MockBuilder(AppComponent, AppModule);
    fixture = MockRender(AppComponent);
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });

  it('should have title', () => {
    expect(ngMocks.formatText(ngMocks.find('h1'))).toContain('Welcome app2');
  });

  it('should have poc-nx-angular-ui2', () => {
    expect(ngMocks.find('poc-nx-angular-ui2', null)).not.toBeNull();
  });
});
