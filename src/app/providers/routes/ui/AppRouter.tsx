import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          element={(
            <Suspense fallback={<div>Loading...</div>}>
              <div className="page-wrapper">
                {element}
              </div>
            </Suspense>
                    )}
          path={path}
        />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
