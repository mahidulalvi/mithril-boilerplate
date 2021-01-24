/**
 * Layout of the application.
 *
 * Style this component as needed.
 */

import m from 'mithril';
import './styles.css';
import messages from './messages.js';
import { changeLocale } from '../../i18nConfig/actions.js';
import './styles.css';
import {
  LOCALE_TYPE_EN_CA,
  LOCALE_TYPE_FR_CA,
} from '../../i18nConfig/constants.js';
import {
  makeSelectIntl,
  makeSelectLocale,
} from '../../i18nConfig/selectors.js';
import { connect } from '../../reduxConfig/connect.js';
import { createStructuredSelector } from 'reselect';

const Layout = () => {
  return {
    view: vnode => {
      const { intl, locale, changeSelectTagOption } = vnode.attrs;

      return (
        <>
          <nav>
            <div className="nav-inner-wrapper">
              <h1>{intl.formatMessage(messages.applicationTitle)}</h1>
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
          </nav>
          <div className="componentWrapper">{vnode.children}</div>
        </>
      );
    },
  };
};

const mapStateToVnodeAttrs = createStructuredSelector({
  intl: makeSelectIntl(),
  locale: makeSelectLocale(),
});

const mapDispatchToVnodeAttrs = dispatch => ({
  changeSelectTagOption: value => dispatch(changeLocale(value)),
});

export default connect(Layout, mapStateToVnodeAttrs, mapDispatchToVnodeAttrs);
