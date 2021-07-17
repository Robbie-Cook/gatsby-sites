import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import WhatsPoppin from "../components/WhatsPoppin";

export default {
  title: "WhatsPoppin",
  component: WhatsPoppin,
  argTypes: {
    backgroundColor: { control: "color" },
    argTypes: { onClick: { action: "onClick" } },
  },
} as ComponentMeta<typeof WhatsPoppin>;

const Template: ComponentStory<typeof WhatsPoppin> = (args) => {
  return <WhatsPoppin {...args}></WhatsPoppin>;
};

export const Primary = Template.bind({});
Primary.args = {
};
