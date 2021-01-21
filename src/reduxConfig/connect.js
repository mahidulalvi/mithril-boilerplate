/**
 * connect is a function which returns an object containing the
 * component & a function to get the component's latest vnode attrs.
 *
 * this function, when called upon rerendering, supplies the component with
 * the latest vnode attrs from Redux store.
 *
 * see src/RouteResolver.js for implementation.
 */

import { store } from './config.js';

export const connect = (
  initialVnode,
  mapStateToVnodeAttrs,
  mapDispatchToVnodeAttrs
) => ({
  initialVnode,
  getVnodeAttrs: () => {
    let attrs = {};
    let attrsWithDispatch = {};

    if (mapStateToVnodeAttrs) {
      attrs = mapStateToVnodeAttrs(store.getState());
    }

    if (mapDispatchToVnodeAttrs) {
      attrsWithDispatch = mapDispatchToVnodeAttrs(store.dispatch);
    }

    return {
      ...attrs,
      ...attrsWithDispatch,
    };
  },
});
