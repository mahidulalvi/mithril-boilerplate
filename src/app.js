import m from 'mithril';
// import ExampleMithrilComponent from './components/ExampleMithrilComponent/ExampleMithrilComponent.js';
import ExampleMithrilComponent2 from './components/ExampleMithrilComponent/ExampleMithrilComponent2.js';
import { store } from './redux/config.js';
import { incrementCounter } from './components/ExampleMithrilComponent/actions';

let globalCount = store.getState().value;
const increaseGlobalCount = () => {
  store.dispatch(incrementCounter());
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

// listening to the store whenever an action is dispatched.
// component is rerendered if stored value is changed.
store.subscribe(() => {
  const currentCount = store.getState().value;
  if (globalCount !== currentCount) {
    globalCount = currentCount;

    rerender();
  }
});

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
