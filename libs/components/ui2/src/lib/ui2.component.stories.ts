import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { Ui2Component } from './ui2.component';

export default {
  title: 'Ui2Component',
  component: Ui2Component,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<Ui2Component>;

const Template: Story<Ui2Component> = (args: Ui2Component) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
