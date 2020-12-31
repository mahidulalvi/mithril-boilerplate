/**
 * injectIntl acts as a HOC which handles locale change, supplies "intl" object
 * and also returns a route resolver for the child component.
 *
 * A route resolver is necessary for supplying the child component with the
 * updated "intl" object on component render when locale is changed.
 */

// import m from 'mithril';
import enCaTranslatedMessages from './translations/en-CA.json';
import frCaTranslatedMessages from './translations/fr-CA.json';
import { LOCALE_TYPE_FR_CA } from './constants.js';
import { createIntl, createIntlCache } from '@formatjs/intl';
import { store } from '../reduxConfig/config.js';

const initializeIntl = (messages, locale) => {
  const cache = createIntlCache();

  return createIntl({
    locale: locale,
    messages: messages,
    cache,
  });
};

const selectTranslatedMessages = locale => {
  let translatedMessages;

  switch (locale) {
    case LOCALE_TYPE_FR_CA:
      translatedMessages = frCaTranslatedMessages;
      break;
    default:
      translatedMessages = enCaTranslatedMessages;
  }

  return translatedMessages;
};

const injectIntl = initialVnode => {
  let locale = store.getState().i18n.locale;

  let intl = initializeIntl(selectTranslatedMessages(locale), locale);

  store.subscribe(() => {
    const updatedLocale = store.getState().i18n.locale;

    if (locale !== updatedLocale) {
      locale = updatedLocale;
      intl = initializeIntl(selectTranslatedMessages(locale), locale);
    }
  });

  // returns a route resolver with updated intl object on render
  return {
    onmatch: () => initialVnode,
    render: vnode => {
      vnode.attrs = { intl };
      return vnode;
    },
  };
};

export default injectIntl;
