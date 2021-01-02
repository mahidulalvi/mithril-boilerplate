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

const mapDispatchToVnodeAttrs = dispatch => ({
  increaseCount: () => dispatch(doubleCounter()),
  changeSelectTagOption: value => dispatch(changeLocale(value)),
});

export default connect(
  ExampleMithrilComponent2,
  mapStateToVnodeAttrs,
  mapDispatchToVnodeAttrs
);
