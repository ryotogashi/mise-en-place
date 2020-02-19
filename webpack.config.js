module.exports = {
  entry: './src/main.tsx',
  devtool: 'inline-source-map',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  devServer: {
    historyApiFallback: true
  },
  node: {
    fs: 'empty'
  }
};
