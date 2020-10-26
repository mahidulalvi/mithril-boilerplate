import m from 'mithril';
import './styles.css';

const ExampleMithrilComponent = () => {
  let count = 0;

  const increaseCount = () => (count += 1);

  return {
    view: () => {
      return m(
        'div',
        m('p', 'Count: ' + count),
        m(
          'button',
          {
            class: 'counter-button',
            onclick: increaseCount,
          },
          ' + '
        )
      );
    },
  };
};

export default ExampleMithrilComponent;
