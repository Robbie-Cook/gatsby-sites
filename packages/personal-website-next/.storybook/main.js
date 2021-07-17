module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],

  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.module\.s(a|c)ss$/,
      loader: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: true,
            sourceMap: true,
          },
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true,
          },
        },
      ],
    });

    return config;
  },
};
