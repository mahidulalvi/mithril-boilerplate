/**
 * root file for the application
 *
 * development build webpack entry file is src/appDev.js which is a HMR enabled,
 * temporary & only for development server - version of the app.js file.
 *
 * read comments in 'server/scripts/devServerPreBuild.js' file for more details.
 *
 * we will use this app.js file in production env. build where
 * HMR - Hot Module Replacement is not needed.
 */

import m from 'mithril';
import ExampleMithrilComponent from './components/ExampleMithrilComponent/ExampleMithrilComponent.js';
import ExampleMithrilComponent2 from './components/ExampleMithrilComponent/ExampleMithrilComponent2.js';
import ExampleMithrilComponent3 from './components/ExampleMithrilComponent/ExampleMithrilComponent3.js';

const mountApp = () =>
  m.route(document.body, '/example1', {
    '/example1': ExampleMithrilComponent,
    '/example2': ExampleMithrilComponent2,
    '/example3': ExampleMithrilComponent3,
  });

mountApp();
