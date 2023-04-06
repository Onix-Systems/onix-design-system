module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss"
  ],
  features: {
    buildStoriesJson: true,
  },
  core: {
    "builder": "webpack5"
  },
  staticDirs: [{ from: '../src/stories/assets', to: 'assets' }],
}