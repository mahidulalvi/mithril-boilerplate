import { COUNTER_INCREMENTED, COUNTER_DOUBLED } from './constants';

const initialState = { value: 0 };

export const exampleMithrilComponentReducer = (
  state = initialState,
  action
) => {
  const currentStateValue = state.value;
  switch (action.type) {
    case COUNTER_INCREMENTED:
      return { value: currentStateValue + 1 };
    case COUNTER_DOUBLED:
      return {
        value: currentStateValue !== 0 ? currentStateValue * 2 : 1,
      };
    default:
      return state;
  }
};
