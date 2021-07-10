import { Story, Meta } from "@storybook/react";
import { useState } from "react";
import Input, { InputProps } from "./input";

export default {
  title: 'lts/Input',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => {
  const [valueInput, setValue] = useState('')
  return <Input {...args} value={valueInput} onChange={e => {setValue(e.target.value)}} />
}
export const LTSInput = Template.bind({})
LTSInput.args = {
  disabled: false,
  width: 500,
  prepend: 'https://',
  append: '.com',
}