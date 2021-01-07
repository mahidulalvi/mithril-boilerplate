/**
 * source for entry file for webpack development env. build
 *
 * development build webpack entry file is src/appDev.js which is a HMR enabled
 * version of this file. The appDev.js file is also ignored in git. This file
 * is created/overwritten every time npm run start command is executed.
 *
 * see in scripts section of package.json for more details.
 *
 * we will use this app.js file in production env. where
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
