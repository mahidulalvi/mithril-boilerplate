import { createSelector } from 'reselect';
import { initializeIntl } from './i18n.js';

const selectI18nDomain = state => state.i18n;

const makeSelectLocale = () =>
  createSelector(selectI18nDomain, domain => domain.locale);

/**
 * makeSelectIntl - returns the 'intl' object
 *
 * if value of 'locale' is changed, intl object is reinitialized
 */
const makeSelectIntl = () =>
  createSelector(makeSelectLocale(), locale => initializeIntl(locale));

export { makeSelectLocale, makeSelectIntl };
