const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../config/webpack.dev.config');

// Change port to suit your preference
const Port = 8888;
const Host = 'localhost';
// Options Dev Servers
const options = {
  // Open To Browser
  open: true,
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
