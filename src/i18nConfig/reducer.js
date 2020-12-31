import { CHANGE_LOCALE, LOCALE_TYPE_EN_CA } from './constants.js';

const initialState = { locale: LOCALE_TYPE_EN_CA };

export const i18nReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      return { locale: action.locale };
    default:
      return state;
  }
};
