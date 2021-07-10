import { Story, Meta } from "@storybook/react"
import Progress, {ProgressProps} from "./progress"

export default {
  title: 'lts/Progress',
  component: Progress
} as Meta

const Template: Story<ProgressProps> = (args) => <Progress {...args} />

export const LTSProgress = Template.bind({})
LTSProgress.args = {
  strokeHeight: 15,
  showText: true,
  percent: 50,
  width:500
}
