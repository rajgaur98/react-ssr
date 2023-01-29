import React, { lazy, Suspense } from "react";
import { Html } from "./Html.jsx";
import { Loading } from "./components/Loading.jsx";

const Sidebar = lazy(() =>
  import("./components/Sidebar.jsx" /* webpackPrefetch: true */)
);
const Main = lazy(() =>
  import("./components/Main.jsx" /* webpackPrefetch: true */)
);
const Extra = lazy(() =>
  import("./components/Extra.jsx" /* webpackPrefetch: true */)
);

export const App = () => {
  return (
    <Html>
      <Suspense fallback={<Loading />}>
        <Sidebar></Sidebar>
        <Suspense fallback={<Loading />}>
          <Main></Main>
          <Suspense fallback={<Loading />}>
            <Extra></Extra>
          </Suspense>
        </Suspense>
      </Suspense>
    </Html>
  );
};
