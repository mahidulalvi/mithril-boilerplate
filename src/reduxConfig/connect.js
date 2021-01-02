/**
 * connect is a function that returns a route resolver for the
 *  child component.
 *
 * A route resolver is necessary for supplying the child component with the
 * updated props from redux store on component render when store is updated.
 */

import { store } from './config.js';

export const connect = (
  initialVnode,
  mapStateToVnodeAttrs,
  mapDispatchToVnodeAttrs
) => {
  let currentAttrValues = {};
  let attrsWithDispatch = {};

  if (mapStateToVnodeAttrs) {
    currentAttrValues = mapStateToVnodeAttrs(store.getState());

    store.subscribe(() => {
      currentAttrValues = mapStateToVnodeAttrs(store.getState());
    });
  }

  if (mapDispatchToVnodeAttrs) {
    attrsWithDispatch = mapDispatchToVnodeAttrs(store.dispatch);
  }

  // returns a route resolver with updated attr values on render
  return {
    onmatch: () => initialVnode,
    render: vnode => {
      vnode.attrs = { ...currentAttrValues, ...attrsWithDispatch };
      return vnode;
    },
  };
};
