---
to: components/<%= Name %>/<%= Name %>.tsx
---
import React, { useState } from "react";
import styles from "./<%= Name %>.module.scss";

const <%= Name %>: React.FC<{}> = ({
	children,
  ...props
}) => {
  return (
    <div {...props}>
    </div>
  );
};

export default <%= Name %>;



