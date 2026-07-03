import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, routePath } from 'shared/config/routes';

export const routes: Record<AppRoutes, RouteProps> = {
  main: {
    path: routePath.main,
    element: <MainPage />,
  },
  about: {
    path: routePath.about,
    element: <AboutPage />,
  },
};
