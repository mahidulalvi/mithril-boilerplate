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

if (module.hot) {
  module.hot.accept(
    [
      './components/ExampleMithrilComponent/ExampleMithrilComponent2.js',
      './components/ExampleMithrilComponent/ExampleMithrilComponent.js',
      './components/ExampleMithrilComponent/ExampleMithrilComponent3.js',
      './components/ExampleMithrilComponent/styles.css',
    ],
    // callback to execute when components are updated - rerendering mithril
    () => mountApp()
  );
}
