import { createStore } from 'redux';
import { exampleMithrilComponentReducer } from '../components/ExampleMithrilComponent/reducer.js';

const store = createStore(
  exampleMithrilComponentReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
