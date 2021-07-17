module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: () => {
    module.rules.push({
      test: /\.module\.s(a|c)ss$/,
      loader: [
        isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: true,
            sourceMap: isDevelopment,
          },
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: isDevelopment,
          },
        },
      ],
    });
  },
};