import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import SvgIcon, {IconNames} from '../components/SvgIcon/SvgIcon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Aha/SvgIcon',
  component: SvgIcon,

  argTypes: {
    color: {control: 'color'},
    name: {
      options: Object.values(IconNames),
      control: {type: 'select'},
    },
  },
} as ComponentMeta<typeof SvgIcon >;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SvgIcon > =
(args) => {
  return (<div className=' bg-gray-800
  bg-opacity-50 transition-all delay-150 ease-in-out'>
    <SvgIcon {...args} >up could be control </SvgIcon>
    <div className='h-1 w-full bg-black'></div>
    {
      Object.values(IconNames).map((item, index)=>{
        return <SvgIcon key={index} {...args} name={item} >
        </SvgIcon>;
      })}
  </div>);
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};


