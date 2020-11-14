import m from 'mithril';
import './styles.css';

const ExampleMithrilComponent = () => {
  let count = 0;

  const increaseCount = () => (count += 1);

  return {
    view: () => (
      <div>
        <p>Count: {count}</p>
        <button className="counter-button" onclick={increaseCount}>
          +
        </button>
      </div>
    ),
  };
};

export default ExampleMithrilComponent;
