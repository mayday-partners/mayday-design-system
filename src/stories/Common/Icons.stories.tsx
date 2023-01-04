import { ComponentMeta, Story } from "@storybook/react";
import Icons, { IconsProps } from "./icons";
import * as svg from "./icons/svg";

export default {
  title: "Common/Icons",
  component: Icons,
  argTypes: {
    icon: {
      description: "아이콘 이름",
      options: Object.keys(svg),
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Icons>;

const Template: Story<IconsProps> = (args) => {
  return <Icons {...args} icon={args.icon} />;
};

export const FooterLogo = Template.bind({});
FooterLogo.args = {
  icon: "footer_logo",
};
