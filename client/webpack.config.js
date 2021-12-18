const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DIRECTORY = path.join(__dirname, "src");

module.exports = {
  entry: {
    index: path.resolve(DIRECTORY, "index.tsx"),
  },
  devtool: "inline-source-map", // loads inline source maps
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    // Transforms HTML and inserts our bundle
    new HtmlWebpackPlugin({
      template: path.resolve(DIRECTORY, "index.html.ts"),
      minify: {
        removeComments: true,
      },
    }),
  ],
  mode: "development",
  devServer: {
    historyApiFallback: true,
    open: true,
    host: "localhost",
    port: 9001,
    watchFiles: ["./**/*.ts", "./**/*.tsx"],
    liveReload: true,
  },
};
