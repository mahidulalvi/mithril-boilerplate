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
 */

const RouteResolver = routeParameter => {
  const isConnectedComponent = routeParameter && routeParameter.initialVnode;

  let routeComponent = routeParameter;
  let getRouteComponentAttrs = () => {};

  if (isConnectedComponent) {
    routeComponent = routeParameter.initialVnode;
    getRouteComponentAttrs = routeParameter.getVnodeAttrs;
  }

  return {
    onmatch: () => routeComponent,
    render: vnode => {
      vnode.attrs = getRouteComponentAttrs();

      return vnode;
    },
  };
};

export default RouteResolver;
