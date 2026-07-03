import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'shared/model/theme';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import AppRounter from './router/ui/AppRounter';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <header>
          <Navbar />
        </header>
        <div className="content-page">
          <Sidebar />
          <AppRounter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
