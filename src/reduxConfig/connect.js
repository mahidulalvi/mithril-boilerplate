/**
 * connect is a function that returns a route resolver for the
 *  child component.
 *
 * A route resolver is necessary for supplying the child component with the
 * updated props from redux store on component render when store is updated.
 */

import { store } from './config.js';
import _ from 'lodash';

const determineCurrentAttrValues = mapStateToVnodeAttrs => {
  const state = store.getState();

  return _.mapValues(mapStateToVnodeAttrs, value => value(state));
};

export const connect = (
  initialVnode,
  mapStateToVnodeAttrs = {},
  mapDispatchToVnodeAttrs
) => {
  let currentAttrValues = determineCurrentAttrValues(mapStateToVnodeAttrs);
  let attrsWithDispatch;

  if (mapDispatchToVnodeAttrs) {
    attrsWithDispatch = mapDispatchToVnodeAttrs(store.dispatch);
  }

  store.subscribe(() => {
    currentAttrValues = determineCurrentAttrValues(mapStateToVnodeAttrs);
  });

  // returns a route resolver with updated attr values on render
  return {
    onmatch: () => initialVnode,
    render: vnode => {
      vnode.attrs = { ...currentAttrValues, ...attrsWithDispatch };
      return vnode;
    },
  };
};
