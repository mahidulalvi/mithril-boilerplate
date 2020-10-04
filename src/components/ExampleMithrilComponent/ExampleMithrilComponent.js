import m from 'mithril';

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
            onclick: increaseCount,
          },
          ' + '
        )
      );
    },
  };
};

export default ExampleMithrilComponent;
