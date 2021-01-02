import m from 'mithril';
import './styles.css';
import messages from './messages';
import { makeSelectIntl } from '../../i18nConfig/selectors.js';
import { connect } from '../../reduxConfig/connect.js';

const ExampleMithrilComponent = () => {
  let count = 0;

  const increaseCount = () => (count += 4);

  return {
    view: vnode => {
      const { intl } = vnode.attrs;

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

/*
 * since makeSelectIntl is a functional selector, we invoke the result
 * of makeSelectIntl() by passing the state param. Alternatively, the
 * createStructuredSelector method could be used
 * (example in ExampleMithrilComponent2)
 * or the selector could be made non-functional.
 */
const mapStateToVnodeAttrs = state => ({
  intl: makeSelectIntl()(state),
});

export default connect(ExampleMithrilComponent, mapStateToVnodeAttrs);
