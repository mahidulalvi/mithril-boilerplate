/**
 * script file responsible for creating development server root file (appDev.js)
 * and enabling HMR - Hot Module Replacement in development server.
 *
 * the appDev.js file is also ignored in git. The file is created/overwritten
 * every time the 'npm run start' command is executed - which runs this file
 * before starting the development server.
 *
 * if the app.js file itself is updated, then 'webpack-shell-plugin' runs this
 * script file again to sync the changes.
 *
 * see in scripts section of package.json for the commands.
 */

const glob = require('glob');
const fs = require('fs');
const dayjs = require('dayjs');

const appJsFileStats = fs.statSync('./src/app.js');
const appJsFileModificationDateInUnixMs = dayjs(appJsFileStats.mtime).valueOf();

const appDevJsFileExists = fs.existsSync('./src/appDev.js');
let appDevJsFileStats;
let appDevJsFileModificationDateInUnixMs;

if (appDevJsFileExists) {
  appDevJsFileStats = fs.statSync('./src/appDev.js');
  appDevJsFileModificationDateInUnixMs = dayjs(
    appDevJsFileStats.mtime
  ).valueOf();
}

const currentDateInUnixMs = dayjs().valueOf();

/**
 * if appDev.js file doesn't exist, this is the first time running the development
 * server, so the file is cloned from app.js file and HMR related code is
 * appended to it.
 *
 * the same is done if the modification date of appDev.js file is smaller than
 * app.js file - which means the app.js file was updated after the appDev.js
 * was updated, so the changes need to be synced.
 *
 * the process is also followed if currentDateInUnixMs is smaller than the
 * modification date of appDev.js file. This is added because there might be
 * a case when the date needs to be changed to the past for some development
 * purpose. This is only necessary if the server is not restarted - as the
 * appDev.js file will be recreated upon restart.
 */
if (
  !appDevJsFileExists ||
  appDevJsFileModificationDateInUnixMs < appJsFileModificationDateInUnixMs ||
  currentDateInUnixMs < appDevJsFileModificationDateInUnixMs
) {
  const hotReloadableFiles = glob
    .sync('**/*.*', { cwd: `${process.cwd()}/src` })
    .map(filePath => (filePath = `'./${filePath}'`));

  if (hotReloadableFiles.indexOf('./appDev.js') === -1)
    hotReloadableFiles.push("'./appDev.js'");

  // handling hot reload of hotReloadableFiles
  const codeToAppend = `\nif (module.hot) {
    module.hot.accept(
      [${hotReloadableFiles.toString()}],
      // callback to execute when components are updated - rerendering mithril
      () => mountApp()
    );
  }`;

  const appJsFileContent = fs.readFileSync('src/app.js');
  const appDevJsFileContent = appJsFileContent + codeToAppend;

  fs.writeFileSync('src/appDev.js', appDevJsFileContent);

  console.log('==> server/scripts/devServerPreBuild.js ran successfully.');
}
