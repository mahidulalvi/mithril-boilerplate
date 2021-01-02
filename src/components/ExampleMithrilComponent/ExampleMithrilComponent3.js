import m from 'mithril';
import { store } from '../../reduxConfig/config.js';
import { connect } from '../../reduxConfig/connect.js';
import { doubleCounter } from './actions';
import './styles.css';
import messages from './messages.js';
import { makeSelectCount } from './selectors.js';
import { makeSelectIntl } from '../../i18nConfig/selectors.js';

const ExampleMithrilComponent3 = () => {
  const increaseCount = () => store.dispatch(doubleCounter());

  return {
    view: vnode => {
      const { intl, count } = vnode.attrs;

      return (
        <div>
          <p>
            {intl.formatMessage(messages.counterLabel)} {count}
          </p>
          <button className="counter-button" onclick={increaseCount}>
            +
          </button>
        </div>
      );
    },
  };
};

const mapStateToVnodeAttrs = {
  count: makeSelectCount(),
  intl: makeSelectIntl(),
};

export default connect(mapStateToVnodeAttrs, ExampleMithrilComponent3);
