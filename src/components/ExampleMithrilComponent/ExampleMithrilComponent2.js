import m from 'mithril';
import { doubleCounter } from './actions';
import { changeLocale } from '../../i18nConfig/actions.js';
import './styles.css';
import messages from './messages.js';
import {
  LOCALE_TYPE_EN_CA,
  LOCALE_TYPE_FR_CA,
} from '../../i18nConfig/constants.js';
import {
  makeSelectIntl,
  makeSelectLocale,
} from '../../i18nConfig/selectors.js';
import { connect } from '../../reduxConfig/connect.js';
import { makeSelectCount } from './selectors.js';
import { createStructuredSelector } from 'reselect';

const ExampleMithrilComponent2 = () => {
  return {
    view: vnode => {
      const {
        intl,
        count,
        increaseCount,
        locale,
        changeSelectTagOption,
      } = vnode.attrs;

      return (
        <div>
          <p>
            {intl.formatMessage(messages.counterLabel)} {count}
          </p>
          <button className="counter-button" onclick={increaseCount}>
            +
          </button>
          <div>
            <label>
              {intl.formatMessage(messages.changeLocaleSelectTagLabel)}
            </label>
            <select
              className="change-locale-select-tag"
              value={locale}
              onchange={event => changeSelectTagOption(event.target.value)}
            >
              <option value={LOCALE_TYPE_EN_CA}>
                {intl.formatMessage(messages.englishLanguageName)}
              </option>
              <option value={LOCALE_TYPE_FR_CA}>
                {intl.formatMessage(messages.frenchLanguageName)}
              </option>
            </select>
          </div>
        </div>
      );
    },
  };
};

const mapStateToVnodeAttrs = createStructuredSelector({
  count: makeSelectCount(),
  intl: makeSelectIntl(),
  locale: makeSelectLocale(),
});

/**
 * usually our store subscription callback (in src/reduxConfig/config.js) picks
 * up dispatched actions before Mithril can auto redraw via firing
 * event handler functions (e.g. button clicks. increaseCount
 * is an event handler function). the subscription callback then manually
 * calls the redraw function.
 *
 * for this reason & also because the redraw calls are throttled,
 * multiple DOM updates do not occur even after 'Redux store
 * subscription callback' initiated manual redraw calls and firing of
 * event handlers initiated auto redraw calls in quick succession.
 *
 * dispatch function 'increaseCount' for counter onclick
 * event handler can be updated to turn off Mithril's default redraw behaviour
 * explicityly by setting event.redraw = false.
 */
const mapDispatchToVnodeAttrs = dispatch => ({
  increaseCount: () => {
    // event.redraw = false;
    dispatch(doubleCounter());
  },
  changeSelectTagOption: value => dispatch(changeLocale(value)),
});

export default connect(
  ExampleMithrilComponent2,
  mapStateToVnodeAttrs,
  mapDispatchToVnodeAttrs
);
