import m from 'mithril';
// import ExampleMithrilComponent from './components/ExampleMithrilComponent/ExampleMithrilComponent.js';
import ExampleMithrilComponent2 from './components/ExampleMithrilComponent/ExampleMithrilComponent2.js';

let globalCount = 0;
const increaseGlobalCount = () => {
  globalCount += 1;
};

// m.mount(document.body, ExampleMithrilComponent);

const rerender = () => {
  m.render(
    document.body,
    <ExampleMithrilComponent2
      globalCount={globalCount}
      increaseGlobalCount={increaseGlobalCount}
    />,
    () => rerender()
  );
};

m.render(
  document.body,
  <ExampleMithrilComponent2
    globalCount={globalCount}
    increaseGlobalCount={increaseGlobalCount}
  />,
  () => rerender()
);

if (module.hot) {
  module.hot.accept(
    [
      './components/ExampleMithrilComponent/ExampleMithrilComponent2.js',
      './components/ExampleMithrilComponent/styles.css',
    ],
    // callback to execute when components are updated - rerendering mithril
    () => rerender()
  );
}
