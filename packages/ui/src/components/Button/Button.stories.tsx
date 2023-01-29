import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  intent: "primary",
  label: 'Button',
  variant: "outlined"
};

export const Secondary = Template.bind({});
Secondary.args = {
  intent: "secondary",
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  fullWidth: true,
  label: 'Full Width',
};

export const Danger = Template.bind({});
Danger.args = {
  intent: 'danger',
  label: 'Danger',
};
