import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

const include   = [path.resolve(process.cwd(), './src')];
const bsInclude = [path.resolve(process.cwd(), './node_modules/bootstrap/dist')];
const config = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: '../src/main/resources/static',
    filename: '[name].js'
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      include,
      loader: 'source-map-loader'
    }],
    loaders: [{
      test: /\.js$/,
      include,
      loader: 'babel',
      query: {
        presets: [
          'stage-0',
          'es2015',
          'react'
        ],
        plugins: [
          'react-html-attrs',
          'add-module-exports',
          'transform-class-properties'
        ]
      }
    }, {
      test: /\.css$/,
      include: [...bsInclude, ...include],
      loader: ExtractTextPlugin.extract('style', 'css!postcss')
    }, {
      test: /\.styl/,
      include,
      loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus')
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      include: bsInclude,
      loader: 'file'
    }, {
      test: /\.(woff|woff2)$/,
      include: bsInclude,
      loader:'url?prefix=font/&limit=1024'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      include: bsInclude,
      loader: 'url?limit=1024&mimetype=application/octet-stream'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      include: bsInclude,
      loader: 'url?limit=1024&mimetype=image/svg+xml'
    }]
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      template: './src/app.html'
    })
  ],
  postcss: [ autoprefixer() ],
  node:{
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

export default config;
