import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from "./Typography";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args}>{args.children}</Typography>;

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
  intent: "text",
  children: "Text"
};

export const Muted = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Muted.args = {
  intent: "muted",
  children: "Muted"
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  intent: "primary",
  children: "Primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  intent: "secondary",
  children: "Secondary"
};

export const Danger = Template.bind({});
Danger.args = {
  intent: 'danger',
  children: 'Danger'
};
