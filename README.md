# React Webpack Template
This project was created in order that it can be used for different projects, personal, business, you can give it the use you want.
## Available Scripts
To start clone the project and use:
### `yarn`  or you can also use `npm install`

To start the server in your browser:
### `yarn dev` or you can also use `npm run dev`

To create your production files:
### `yarn build` or you can also use `npm run build`

## What does this template bring?
This template already has installed what is necessary to be able to be used in its entirety
* `ReactJS and ReactDOM`
* `JSX | JS`
* `CSS | SASS`

### The webpack.common.js is configured as follows:
```js
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        type: "asset",
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
```

### The webpack.prod.js is configured as follows:
```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
const prodConfig = {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: false,
    },
  },
  plugins: [new MiniCssExtractPlugin()],
};

module.exports = merge(common, prodConfig);
```

### The webpack.dev.js is configured as follows:
```js
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    contentBase: "../dist",
    open: "brave",
  },
  target: "web",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      }
    ]
  }
};

module.exports = merge(common, devConfig);
```

If you have knowledge of webpack you can modify the exit route to your liking

## About
As explained above, this project has many purposes and if you want to use them in your projects, do not hesitate to do so.
