import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoaderPage } from 'shared/ui/LoaderPage/LoaderPage';
import { routes } from '../config/routerConfig';

const AppRounter = () => (
  <Suspense fallback={<LoaderPage />}>
    <Routes>
      {Object.values(routes).map(({ path, element }) => (
        <Route path={path} element={element} />
      ))}
    </Routes>
  </Suspense>
);

export default AppRounter;
