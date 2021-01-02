/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import BlogPostShort, { BlogPostProps } from "./BlogPostShort";
import ReactComponentsContext from "../theme/ReactComponentsContext";
import Filters from "../filters/Filters";
import { Filters as FiltersInterface } from "../types";
export interface BlogProps {
  posts: Array<Omit<BlogPostProps, "short">>;
  filters?: Array<string>;
}

/**
 *  A Blog component.
 */
const Blog: React.FC<BlogProps> = (props) => {
  const [filter, setFilter] = React.useState<string | null>(null);

  return (
    <div>
      <Filters
        filters={[
          { text: "All", onClick: () => setFilter(null), active: !filter },
          ...(props.filters?.map((f) => ({
            text: f,
            onClick: () => {
              if (filter === f) {
                setFilter(null);
              } else {
                setFilter(f);
              }
            },
          })) ?? []),
        ]}
      />
      {props.posts.map((post) => (
        <div
          key={post.date}
          css={css`
            margin-bottom: 75px;
          `}
        >
          <BlogPostShort {...post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
