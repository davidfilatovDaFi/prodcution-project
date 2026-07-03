import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../config/routerConfig";

const AppRounter = () => {
  console.log(routes);
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        {Object.values(routes).map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRounter;
