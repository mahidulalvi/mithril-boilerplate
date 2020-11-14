import m from 'mithril';
import './styles.css';

const ExampleMithrilComponent2 = () => ({
  view: vnode => (
    <div>
      <p>Count: {vnode.attrs.globalCount}</p>
      <button
        className="counter-button"
        onclick={vnode.attrs.increaseGlobalCount}
      >
        +
      </button>
    </div>
  ),
});

export default ExampleMithrilComponent2;
