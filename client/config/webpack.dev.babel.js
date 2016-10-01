import config from './webpack.common.babel';

export default {
  ...config,
  devtool: '#cheap-module-inline-source-map',
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 8000,
    hot: true,
    proxy: {
      "/logout": "http://localhost:8080",
      "/login": "http://localhost:8080",
      "/api": "http://localhost:8080",
      "/bye": "http://localhost:8080",
      "/me": "http://localhost:8080"
    }
  }
  // devServer: {
  //   historyApiFallback: true,
  //   progress: true,
  //   inline: true,
  //   options: {
  //     watchOptions: 100
  //   },
  //   port: 8000,
  //   proxy: {
  //     '/logout': 'http://localhost:8080',
  //     '/login': 'http://localhost:8080',
  //     '/bye': 'http://localhost:8080',
  //     '/api': 'http://localhost:8080',
  //     '/me': 'http://localhost:8080'
  //   }
  // }
};
