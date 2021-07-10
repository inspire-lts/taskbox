import { Story, Meta } from "@storybook/react";
import Upload, { UploadProps } from "./upload";
import { action } from '@storybook/addon-actions'
import Icon from '../Icon/Icon'


export default {
  title: 'lts/Upload',
  component: Upload
} as Meta

const Template: Story<UploadProps> = (args) => (
  <Upload {...args}>
    <Icon icon='upload' size='5x' theme='secondary'/>
    <br/>
    <p>Drag file over to upload</p>
  </Upload>
)
export const LTSUpload = Template.bind({})
LTSUpload.args = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  drag: true,
  multiple: true,
  name: 'filename',
  headers: {'X-Powered-By': 'lts'},
  data: {'key': 'value'},
}