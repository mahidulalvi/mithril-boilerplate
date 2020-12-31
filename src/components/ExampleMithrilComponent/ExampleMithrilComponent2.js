import m from 'mithril';
import { store } from '../../reduxConfig/config.js';
import { doubleCounter } from './actions';
import { changeLocale } from '../../i18nConfig/actions.js';
import './styles.css';
import injectIntl from '../../i18nConfig/i18n.js';
import messages from './messages.js';
import {
  LOCALE_TYPE_EN_CA,
  LOCALE_TYPE_FR_CA,
} from '../../i18nConfig/constants.js';

const ExampleMithrilComponent2 = () => {
  let currentCount = store.getState().exampleComponent.value;
  let currentLocale = store.getState().i18n.locale;

  const increaseCount = () => store.dispatch(doubleCounter());
  const changeSelectTagOption = value => store.dispatch(changeLocale(value));

  // listening to the store whenever an action is dispatched.
  // component is rerendered if stored value is changed.
  store.subscribe(() => {
    const updatedCount = store.getState().exampleComponent.value;
    const updatedLocale = store.getState().i18n.locale;
    if (currentCount !== updatedCount) {
      currentCount = updatedCount;
    }
    if (currentLocale !== updatedLocale) {
      currentLocale = updatedLocale;
    }
  });

  return {
    view: vnode => {
      const intl = vnode.attrs.intl;

      return (
        <div>
          <p>
            {intl.formatMessage(messages.counterLabel)} {currentCount}
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
              value={currentLocale}
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

export default injectIntl(ExampleMithrilComponent2);
