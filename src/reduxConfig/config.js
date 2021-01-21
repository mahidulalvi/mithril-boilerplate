import { createStore, combineReducers } from 'redux';
import { exampleMithrilComponentReducer } from '../components/ExampleMithrilComponent/reducer.js';
import { i18nReducer } from '../i18nConfig/reducer.js';
import m from 'mithril';

const rootReducer = combineReducers({
  exampleComponent: exampleMithrilComponentReducer,
  i18n: i18nReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/**
 * updating the DOM when an action is dispatched to the Redux store.
 * this will cause components to rerender with latest props from store.
 * see the src/RouteResolver.js and src/reduxConfig/connect.js files for
 * more details on how the component gets the latest props.
 *
 * a more efficient method for redrawing on store update might be
 * implemented later.
 */
store.subscribe(() => m.redraw());

export { store };
