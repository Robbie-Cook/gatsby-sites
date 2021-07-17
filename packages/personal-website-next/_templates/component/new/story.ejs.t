---
to: stories/<%= Name %>.stories.tsx
---

import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import <%= Name %> from "../components/<%= Name %>";

export default {
  title: "<%= Name %>",
  component: <%= Name %>,
  argTypes: {
    backgroundColor: { control: "color" },
    argTypes: { onClick: { action: "onClick" } },
  },
} as ComponentMeta<typeof <%= Name %>>;

const Template: ComponentStory<typeof <%= Name %>> = (args) => {
  return <<%= Name %> {...args}></<%= Name %>>;
};

export const Primary = Template.bind({});
Primary.args = {
};
