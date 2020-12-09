import m from 'mithril';
import ExampleMithrilComponent from './components/ExampleMithrilComponent/ExampleMithrilComponent.js';
import ExampleMithrilComponent2 from './components/ExampleMithrilComponent/ExampleMithrilComponent2.js';

const mountApp = () =>
  m.route(document.body, '/example1', {
    '/example1': ExampleMithrilComponent,
    '/example2': ExampleMithrilComponent2,
  });

mountApp();

if (module.hot) {
  module.hot.accept(
    [
      './components/ExampleMithrilComponent/ExampleMithrilComponent2.js',
      './components/ExampleMithrilComponent/ExampleMithrilComponent.js',
      './components/ExampleMithrilComponent/styles.css',
    ],
    // callback to execute when components are updated - rerendering mithril
    () => mountApp()
  );
}
