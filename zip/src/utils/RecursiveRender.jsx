import { Route } from "react-router-dom";

const RecursiveRender = (routes) =>
  routes.map((route, idx) => {
    const Element = route.element;

    return (
      <Route key={idx} path={route.path} element={<Element />}>
        {route.children && RecursiveRender(route.children)}
      </Route>
    );
  });

export default RecursiveRender