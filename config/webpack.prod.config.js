const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const paths = require('../scripts/paths');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: paths.appIndexJs,
  },
  mode: 'production',
  stats: 'errors-only',
  output: {
    publicPath: '/',
    path: paths.appBuild,
    filename: '[name].out.js',
    clean: true,
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react'],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        include: [paths.appSrc],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.(ico|gif|jpe?g|jpg|png|svg|eot|ttf|woff2?)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource',
      },
      {
        test: /manifest.json$/,
        use: ['json-loader', 'manifest-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules'],
    alias: {
      Components: paths.resolveApp('src/components'),
      Containers: paths.resolveApp('src/container'),
      Utils: paths.resolveApp('src/utils'),
    },
  },
  plugins: [
    new Dotenv(),
    new CopyPlugin({
      patterns: [
        { from: paths.appMeta, to: '.' },
        { from: paths.appManifest, to: '.' },
        { from: paths.appRobotGoogle, to: '.' },
      ],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: '[chunkhash].[name].css' }),
    new HtmlWebPackPlugin({
      template: paths.appHtml,
      favicon: paths.appFavicon,
      inject: true,
    }),
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('AfterEmitPlugin', () => {
          console.log('Build successfully..');
        });
      },
    },
  ],
};
