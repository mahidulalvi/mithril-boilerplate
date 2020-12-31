import { defineMessages } from '@formatjs/intl';

const scope = 'app.components.ExampleMithrilComponent';

export default defineMessages({
  counterLabel: {
    id: `${scope}.counterLabel`,
    defaultMessage: 'Counter: ',
  },
  changeLocaleSelectTagLabel: {
    id: `${scope}.changeLocaleSelectTagLabel`,
    defaultMessage: 'Change language:',
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
