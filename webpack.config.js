const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');

module.exports = (env) => {
  const CSSExtract = new ExtractTextPlugin('app.css');
  const isProduction = env === 'production';
  
  return {
    entry: ['@babel/polyfill', './src/client/index.js'],
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'app.bundle.js'
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
        // use: ['babel-loader', 'eslint-loader']
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }]
        })
      }]
    },
    resolve: {
      modules: [
        path.resolve('./src'),
        path.resolve('./node_modules')
      ],
      extensions: ['*', '.js', '.jsx']
    },
    plugins: [
      CSSExtract,
      new workboxPlugin.GenerateSW({
        cacheId: 'crecipe',
        swDest: 'sw.js',
        navigateFallback: '/index.html',
        clientsClaim: true,
        skipWaiting: true
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      publicPath: '/',
      historyApiFallback: true
    }
  };
};
