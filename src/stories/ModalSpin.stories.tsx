import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import ModalSpin from '../components/ModalSpin/ModalSpin';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Aha/ModalSpin',
  component: ModalSpin,

  argTypes: {
    backgroundColor: {control: 'color'},

  },
} as ComponentMeta<typeof ModalSpin >;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ModalSpin > =
(args) => <ModalSpin {...args} >this is Modal Loading test</ModalSpin>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  toggle: true,
};


