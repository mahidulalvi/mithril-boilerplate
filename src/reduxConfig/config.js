import { createStore, combineReducers } from 'redux';
import { exampleMithrilComponentReducer } from '../components/ExampleMithrilComponent/reducer.js';
import { i18nReducer } from '../i18nConfig/reducer.js';

const rootReducer = combineReducers({
  exampleComponent: exampleMithrilComponentReducer,
  i18n: i18nReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
