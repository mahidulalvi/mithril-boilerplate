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

  return _.mapValues(mapStateToVnodeAttrs, value => {
    return value(state);
  });
};

export const connect = (mapStateToVnodeAttrs = {}, initialVnode) => {
  let currentAttrValues = determineCurrentAttrValues(mapStateToVnodeAttrs);

  store.subscribe(() => {
    currentAttrValues = determineCurrentAttrValues(mapStateToVnodeAttrs);
  });

  // returns a route resolver with updated attr values on render
  return {
    onmatch: () => initialVnode,
    render: vnode => {
      vnode.attrs = currentAttrValues;
      return vnode;
    },
  };
};
