import m from 'mithril';
import { connect } from '../../reduxConfig/connect.js';
import { doubleCounter } from './actions';
import './styles.css';
import messages from './messages.js';
import { makeSelectCount } from './selectors.js';
import { makeSelectIntl } from '../../i18nConfig/selectors.js';

const ExampleMithrilComponent3 = () => {
  return {
    view: vnode => {
      const { intl, count, increaseCount } = vnode.attrs;

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

const mapDispatchToVnodeAttrs = dispatch => ({
  increaseCount: () => dispatch(doubleCounter()),
});

export default connect(
  ExampleMithrilComponent3,
  mapStateToVnodeAttrs,
  mapDispatchToVnodeAttrs
);
