import m from 'mithril';
import './styles.css';
import messages from './messages';
import injectIntl from '../../i18nConfig/i18n.js';

const ExampleMithrilComponent = () => {
  let count = 0;

  const increaseCount = () => (count += 4);

  return {
    view: vnode => {
      const intl = vnode.attrs.intl;

      return (
        <div>
          <p>
            {intl.formatMessage(messages.counterLabel)} {count}
          </p>
          <button className="counter-button" onclick={increaseCount}>
            +
          </button>
        </div>
      );
    },
  };
};

export default injectIntl(ExampleMithrilComponent);
