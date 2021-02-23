const standardBasePath = `/`;
const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }, themeOptions) => {
  const { createPage } = actions;

  const basePath = themeOptions.basePath || standardBasePath;

  createPage({
    path: basePath,
    component: require.resolve(`./src/templates/cara.tsx`),
  });

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(`Creating page /blog/posts${node.fields.slug}`)
    createPage({
      path: `/blog/posts${node.fields.slug}`,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });

  // Create blog page
  createPage({
    path: path.resolve(basePath, "blog"),
    component: require.resolve(`./src/blog.tsx`),
  });

  // Create cv page
  createPage({
    path: path.resolve(basePath, "cv"),
    component: require.resolve(`./src/cv/cv.tsx`),
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};