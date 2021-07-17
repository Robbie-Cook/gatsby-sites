import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DecorativeTitle from "../components/DecorativeTitle";

export default {
  title: "DecorativeTitle",
  component: DecorativeTitle,
  argTypes: {
    backgroundColor: { control: "color" },
    argTypes: { onClick: { action: "onClick" } },
  },
} as ComponentMeta<typeof DecorativeTitle>;

const Template: ComponentStory<typeof DecorativeTitle> = (args) => {
  return <DecorativeTitle {...args}></DecorativeTitle>;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Hi, I'm Robbie Cook"
};
