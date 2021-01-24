import { defineMessages } from '@formatjs/intl';

const scope = 'app.components.Shared';

export default defineMessages({
  applicationTitle: {
    id: `${scope}.applicationTitle`,
    defaultMessage: 'mithril-boilerplate',
  },
  changeLocaleSelectTagLabel: {
    id: `${scope}.changeLocaleSelectTagLabel`,
    defaultMessage: 'Language:',
  },
  englishLanguageName: {
    id: `${scope}.englishLanguageName`,
    defaultMessage: 'English',
  },
  frenchLanguageName: {
    id: `${scope}.frenchLanguageName`,
    defaultMessage: 'French',
  },
});
