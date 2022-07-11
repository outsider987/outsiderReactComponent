import React from 'react';
// import './../index.scss';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Button from '../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Aha/Button',
  component: Button,

  argTypes: {
    backgroundColor: {control: 'color'},

  },
} as ComponentMeta<typeof Button >;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button > =
(args) => <Button {...args} >this is button test</Button>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
//   primary: true,
  className: '',
};

