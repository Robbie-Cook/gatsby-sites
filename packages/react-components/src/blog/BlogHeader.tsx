/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { H3 } from "../typography/Typography";

/**
 * Interface for BlogHeader props
 */
interface BlogHeaderProps {
  children?: any;
}

/**
 *  A BlogHeader component.
 */
const BlogHeader: React.FC<BlogHeaderProps> = (props) => {
  return (
    <H3
      css={css`
        font-size: 3rem;
        font-family: Vollkorn, serif;
      `}
    >
      {props.children}
    </H3>
  );
};

export default BlogHeader;