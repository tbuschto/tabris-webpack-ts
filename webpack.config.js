module.exports = {
  // Make sure the entry file is correct for your app:
  entry: './src/index.ts',
  externals: ['tabris', 'tabris-decorators'],
  output: {
    libraryTarget: 'commonjs2',
    filename: 'index.js',
    path: __dirname + '/dist'
  },
  // If you don't use any TypeScript code, you don't need to include the extensions
  // ".ts" and ".tsx" and can also omit the "module" configuration below.
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
  module: {
    rules: [
      { test: /\.(j|t)sx?$/, loader: 'ts-loader' }
    ]
  }
};
