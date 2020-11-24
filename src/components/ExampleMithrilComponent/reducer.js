import { COUNTER_INCREMENTED } from './constants';

export const exampleMithrilComponentReducer = (
  state = { value: 0 },
  action
) => {
  switch (action.type) {
    case COUNTER_INCREMENTED:
      return { value: state.value + 1 };
    default:
      return state;
  }
};
