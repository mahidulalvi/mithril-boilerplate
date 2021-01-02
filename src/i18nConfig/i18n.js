/**
 * initializeIntl function creates the 'intl' object.
 *
 * This 'intl' object gives us all the functionalities of internationalizing
 * the application.
 */

import enCaTranslatedMessages from './translations/en-CA.json';
import frCaTranslatedMessages from './translations/fr-CA.json';
import { LOCALE_TYPE_FR_CA } from './constants.js';
import { createIntl, createIntlCache } from '@formatjs/intl';

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

export const initializeIntl = locale => {
  const cache = createIntlCache();
  const messages = selectTranslatedMessages(locale);

  return createIntl({
    locale: locale,
    messages: messages,
    cache,
  });
};
