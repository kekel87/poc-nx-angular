import { Pipe1PipeModule } from '@poc-nx-angular/pipes/pipe1';
import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { Ui1Component } from './ui1.component';

export default {
  title: 'Ui1Component',
  component: Ui1Component,
  decorators: [
    moduleMetadata({
      imports: [Pipe1PipeModule],
    }),
  ],
} as Meta<Ui1Component>;

const Template: Story<Ui1Component> = (args: Ui1Component) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
