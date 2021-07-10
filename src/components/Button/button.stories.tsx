import { Story, Meta } from "@storybook/react";
import Button, { ButtonProps } from "./button";

export default {
  title: 'lts/Button',
  component: Button,
  argTypes: {
    size : {
      control: {
        type: 'select',
        options: ['lg', 'sm']
      }
    },
    btnType: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'danger', 'link']
      }
    }
  }
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args}/> 
export const LTSButton = Template.bind({})
LTSButton.args = {
  children: 'Button',
  size: 'lg',
  btnType: 'primary',
  disabled: false,
  href: 'https://www.baidu.com'
}