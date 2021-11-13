const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const devConfig = {
  mode: 'development',
  devServer: {
      port: 8084,
      historyApiFallback: {
          index: 'index.html'
      }
  },
    plugins: [
        new ModuleFederationPlugin({
            name: 'code-school',
            filename: 'remoteEntry.js',
            exposes: {
                './codeSchoolApp': './src/bootstrap'
            },
            shared: packageJson.dependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
};

// merge: Last parameter will overwrite the keys in common
module.exports = merge(commonConfig, devConfig);
