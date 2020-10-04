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
    m(ExampleMithrilComponent2, {
      globalCount: globalCount,
      increaseGlobalCount: increaseGlobalCount,
    }),
    () => rerender()
  );
};

m.render(
  document.body,
  m(ExampleMithrilComponent2, {
    globalCount: globalCount,
    increaseGlobalCount: increaseGlobalCount,
  }),
  () => rerender()
);
