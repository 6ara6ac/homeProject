import './styles/index.scss';
import { classNames } from 'shared/lib/classNames';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { Suspense } from 'react';
import { AppRouter } from './providers/routes';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <NavBar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
