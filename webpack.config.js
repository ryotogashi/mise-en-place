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
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: [/node_modules/, /__mocks__/, /__tests__/, /.storybook/, /\.stories.tsx?$/]
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
