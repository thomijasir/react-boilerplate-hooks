// paths.js

// Paths will export some path variables that we'll
// use in other Webpack config and server files

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appAssets: resolveApp('src/assets'), // For images and other assets
  appBuild: resolveApp('dist'), // Prod built files end up here
  appConfig: resolveApp('config'), // App config files
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveApp('src/index.tsx'), // Main entry point
  appSrc: resolveApp('src'), // App source
  appTsConfig: resolveApp('tsconfig.json'),
  appPublic: resolveApp('public'), // App Public Access
  appFavicon: resolveApp('public/favicon.ico'), // App Public Access
  appMeta: resolveApp('public/meta.json'), // App Meta For Cache
  appManifest: resolveApp('public/manifest.json'), // App Meta For Cache
  appRobotGoogle: resolveApp('public/robots.txt'), // App Meta For Cache
};

// Reference Configuration WebPack
// https://gist.github.com/developit/3c83db422f03ef66ea36
// https://github.com/joshuacrass/react-scss-webpack
