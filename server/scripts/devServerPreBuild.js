const glob = require('glob');
const fs = require('fs');

const hotReloadableFiles = glob
  .sync('**/*.*', { cwd: `${process.cwd()}/src` })
  .filter(filePath => filePath !== 'app.js')
  .map(filePath => (filePath = `'./${filePath}'`));

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
