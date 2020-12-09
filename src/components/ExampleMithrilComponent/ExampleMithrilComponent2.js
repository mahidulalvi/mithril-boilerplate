import m from 'mithril';
import { store } from '../../redux/config.js';
import { doubleCounter } from './actions';
import './styles.css';

const ExampleMithrilComponent2 = () => {
  let globalCount = store.getState().value;
  const increaseGlobalCount = () => {
    store.dispatch(doubleCounter());
  };

  // listening to the store whenever an action is dispatched.
  // component is rerendered if stored value is changed.
  store.subscribe(() => {
    const currentCount = store.getState().value;
    if (globalCount !== currentCount) {
      globalCount = currentCount;
    }
  });

  return {
    view: () => (
      <div>
        <p>Count: {globalCount}</p>
        <button className="counter-button" onclick={increaseGlobalCount}>
          +
        </button>
      </div>
    ),
  };
};

export default ExampleMithrilComponent2;
