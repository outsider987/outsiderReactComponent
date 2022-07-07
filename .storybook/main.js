
const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
//     'storybook-addon-sass-postcss',
//     {
//      name: 'storybook-addon-sass-postcss',
//      options: {
//        postcssLoaderOptions: {
//          implementation: require('sass'),
//        },
//      },
//    },
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async(config)=>{
    config.module.rules.push({
        // test: /\.(css|scss)?$/,
        // use:
        //  [
        //   'css-loader',
        //   'postcss-loader',
        //   'sass-loader',
          
        // ],
        test: /\.css?$/,
        use:
         [
          'postcss-loader',
          'sass-loader',
          
        ],
        include:path.resolve(__dirname,"../")

       
      },)
      return config;
  }
}