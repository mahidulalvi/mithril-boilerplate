import { CHANGE_LOCALE } from './constants.js';

export const changeLocale = locale => ({
  type: CHANGE_LOCALE,
  locale,
});
