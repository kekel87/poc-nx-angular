import { MockBuilder, MockRender, MockedComponentFixture } from 'ng-mocks';

import { Ui2Component, Ui2Module } from './ui2.component';

describe('Ui1Component', () => {
  let fixture: MockedComponentFixture<Ui2Component>;

  beforeEach(async () => {
    await MockBuilder(Ui2Component, Ui2Module);
    fixture = MockRender(Ui2Component);
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
