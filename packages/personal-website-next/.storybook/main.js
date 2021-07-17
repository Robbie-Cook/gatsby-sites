module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.module\.s(a|c)ss$/,
      use: [
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

    config.module.rules.push({
      test: /\.scss$/,
      exclude: /\.module\.s(a|c)ss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });

    return config;
  },
};
