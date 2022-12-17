import {
  MockBuilder,
  MockRender,
  MockedComponentFixture,
} from 'ng-mocks';
import { Ui1Component, Ui1Module } from './ui1.component';

describe('Ui1Component', () => {
  let fixture: MockedComponentFixture<Ui1Component>;

  beforeEach(async () => {
    await MockBuilder(Ui1Component, Ui1Module);
    fixture = MockRender(Ui1Component);
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
