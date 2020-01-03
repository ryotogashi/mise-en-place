const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.tsx",
  devtool: "inline-source-map",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  devServer: {
    historyApiFallback: true
  },
  node: {
    fs: "empty"
  },
  plugins: [new HtmlWebPackPlugin({ template: "./public/index.html" })]
};
