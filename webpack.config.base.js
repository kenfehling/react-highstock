var webpack = require('webpack');

module.exports = {
  output: {
    libraryTarget: 'umd',
    library: 'ReactHighstock',
    path: './dist/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  externals: [
        {
          react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
          },
        },
        {
          'react/addons': {
            root: 'React',
            commonjs2: 'react/addons',
            commonjs: 'react/addons',
            amd: 'react/addons',
          },
        },
        {
          highstock: {
            root: 'Highstock',
            commonjs2: 'highstock',
            commonjs: 'highstock',
            amd: 'highstock',
          },
        },
    ],
  node: {Buffer: false},
};
