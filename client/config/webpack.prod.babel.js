import config from './webpack.dev.babel';
import webpack from 'webpack';

config.devtool = false;
config.plugins = [
  ...config.plugins,
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
];

export default config;
