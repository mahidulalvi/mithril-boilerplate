/**
 * returns a RouteResolver object.
 * https://mithril.js.org/route.html#routeresolver
 *
 * has ability to handle Redux store connected components as well as
 * non-connected components.
 *
 * the render method gets the latest props from Redux store
 * & supplies it to the component's vnode attrs on rerender
 * if the component is connected to Redux.
 *
 * by default, it wraps the route component with a layout component,
 * Layout from src/containers/Shared/Layout.js. It can also use a given
 * component as a layout instead of the default one if supplied in the param;
 */

import m from 'mithril';
import Layout from './containers/Shared/Layout.js';

const RouteResolver = (routeComponent, layout) => {
  const isConnectedComponent = routeComponent && routeComponent.initialVnode;

  let Component = routeComponent;
  let getComponentAttrs = () => {};

  if (isConnectedComponent) {
    Component = routeComponent.initialVnode;
    getComponentAttrs = routeComponent.getVnodeAttrs;
  }

  let LayoutComponent;
  let getLayoutAttrs;

  if (!layout) {
    LayoutComponent = Layout.initialVnode;
    getLayoutAttrs = Layout.getVnodeAttrs;
  } else {
    const isConnectedLayout = layout && layout.initialVnode;
    LayoutComponent = isConnectedLayout ? layout.initialVnode : layout;
    getLayoutAttrs = isConnectedLayout ? layout.getVnodeAttrs : () => {};
  }

  return {
    onmatch: () => Component,
    render: vnode => {
      vnode.attrs = getComponentAttrs();
      const layoutAttrs = getLayoutAttrs();

      return (
        <LayoutComponent {...layoutAttrs}>
          <Component {...vnode.attrs} />
        </LayoutComponent>
      );
    },
  };
};

export default RouteResolver;
