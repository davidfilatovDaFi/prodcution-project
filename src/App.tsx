import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./Pages/AboutPage/AboutPage.asyc";
import { MainPageAsync } from "./Pages/MainPage/MainPage.asyc";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

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
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
