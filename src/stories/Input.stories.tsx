import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Input from '../components/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Aha/Input',
  component: Input,

  argTypes: {
    backgroundColor: {control: 'color'},
    type: {
      options: ['number', 'string'],
      control: {type: 'select'},
    },
  },
} as ComponentMeta<typeof Input >;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input > = (args) => <Input {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Input',
  placeholder: 'test',
  autoFocus: false,
};


