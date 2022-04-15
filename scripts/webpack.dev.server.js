const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../config/webpack.dev.config');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
// Change port to suit your preference
const Port = 8888;
const Host = '0.0.0.0';
// Options Dev Servers
const options = {
  https: protocol === 'https',
  // Open To Browser
  open: [`http://localhost:${Port}`],
  // History Link API For URL
  historyApiFallback: true,
  // Enable webpack's Hot Module Replacement feature
  hot: true,
  // Client Custom Config Info
  client: {
    overlay: {
      errors: true,
      warnings: false,
    },
    logging: 'info',
    progress: true,
    reconnect: true,
  },
  // Reload On Live Disable For Fast Development
  liveReload: false,
  // Port Listening
  port: 'auto',
};
// Compiler & Serve Service
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, options);
server.listen(Port, Host, () => {
  process.stdout.write(`dev server is running: http://${Host}:${Port}\n`);
});
