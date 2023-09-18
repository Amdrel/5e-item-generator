import { Fragment } from "react";
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";

type RouteDefinitions = Record<
  string,
  { default: React.PropsWithChildren<React.ComponentType> }
>;

const DynamicRouteDefinitions: RouteDefinitions = import.meta.glob(
  "/src/pages/**/[a-z[]*.tsx",
  { eager: true }
);

const PreservedRouteDefinitions: RouteDefinitions = import.meta.glob(
  "/src/pages/(_app|404).tsx",
  { eager: true }
);

const dynamicRoutes = Object.keys(DynamicRouteDefinitions).map((route) => {
  const path = route
    .replace(/\/src\/pages|index|\.tsx$/g, "")
    .replace(/\[\.{3}.+\]/, "*")
    .replace(/\[(.+)\]/, ":$1");

  return {
    path,
    component: DynamicRouteDefinitions[route].default,
  };
});

const preservedRoutes = Object.keys(PreservedRouteDefinitions).reduce(
  (preserved, file) => {
    const key = file.replace(/\/src\/pages\/|\.tsx$/g, "");

    return {
      ...preserved,
      [key]: PreservedRouteDefinitions[file],
    } as RouteDefinitions;
  },
  {} as RouteDefinitions
);

function Routes() {
  const App = preservedRoutes?.["_app"].default || Fragment;
  const NotFound = preservedRoutes?.["404"].default || Fragment;

  console.log("Dynamic Routes:", dynamicRoutes);
  console.log("Preserved Routes:", preservedRoutes);

  return (
    <>
      {/* @ts-ignore */}
      <App>
        <ReactRouterRoutes>
          {dynamicRoutes.map(({ path, component: Component = Fragment }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </ReactRouterRoutes>
      </App>
    </>
  );
}

export default Routes;
