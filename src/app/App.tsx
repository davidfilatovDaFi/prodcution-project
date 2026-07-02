import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "shared/model/theme/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AboutPage } from "Pages/AboutPage";
import { MainPage } from "Pages/MainPage";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <header>
        <button onClick={toggleTheme}>TOGGLE</button>
        <Link to={"/about"}>About</Link>
        <Link to={"/"}>Main</Link>
      </header>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
