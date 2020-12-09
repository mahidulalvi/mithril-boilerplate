import { COUNTER_INCREMENTED, COUNTER_DOUBLED } from './constants';

const incrementCounter = () => ({
  type: COUNTER_INCREMENTED,
});

const doubleCounter = () => ({
  type: COUNTER_DOUBLED,
});

export { incrementCounter, doubleCounter };
