import { COUNTER_INCREMENTED } from './constants';

const incrementCounter = () => ({
  type: COUNTER_INCREMENTED,
});

export { incrementCounter };
