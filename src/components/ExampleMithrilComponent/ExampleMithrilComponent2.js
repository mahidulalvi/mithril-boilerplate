import m from 'mithril';
import './styles.css';

const ExampleMithrilComponent2 = initialVnode => {
  return {
    view: vnode => {
      console.log(vnode.attrs, initialVnode.attrs, 'initialVnode vs vnode');

      return m('div', [
        m('p', 'Count: ' + vnode.attrs.globalCount),
        m(
          'button',
          {
            class: 'counter-button',
            onclick: vnode.attrs.increaseGlobalCount,
          },
          ' + '
        ),
      ]);
    },
  };
};

export default ExampleMithrilComponent2;
