/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { H3, P } from "../typography/Typography";
import { Theme } from "../theme/Theme";
import BlogInfo from "./BlogInfo";
import BlogHeader from "./BlogHeader";
import BlogSection from "./BlogSection";

export interface BlogPostProps {
  children?: any;
  title: string;
  date: number;
  author: string;
  content: string | JSX.Element;
}

/**
 *  A BlogPost component.
 */
const BlogPostShort: React.FC<BlogPostProps> = (props) => {
  return (
    <div css={css``}>
      <div>
        <BlogHeader>{props.title}</BlogHeader>
        <BlogInfo date={props.date} author={props.author} />
      </div>
      <BlogSection>{props.content}</BlogSection>
    </div>
  );
};

export default BlogPostShort;