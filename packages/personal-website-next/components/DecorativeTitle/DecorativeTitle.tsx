import React, { useState } from "react";
import styles from "./DecorativeTitle.module.scss";

const DecorativeTitle: React.FC<{}> = ({ children, ...props }) => {
  return <h1 {...props}>{children}</h1>;
};

export default DecorativeTitle;
