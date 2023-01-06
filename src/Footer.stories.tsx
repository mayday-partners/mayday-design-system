import { Story } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "Footer",
  component: Footer,
};

const Template: Story<any> = (args) => <Footer />;

export const Default = Template.bind({});
// Default.args = {};
