const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: true }),
    new HtmlWebpackPlugin({
      title: "Simple React App",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
    app: path.resolve(__dirname, "./src/container/App.js"),
    simple: path.resolve(__dirname, "./src/component/Simple.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    port: 4000,
  },
};
