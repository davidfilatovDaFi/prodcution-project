import { ThemeSwitch } from "features/ThemeSwitch";
import { classNames } from "shared/lib/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitch />
      <nav>
        <AppLink theme="inverted" to="/">
          Main
        </AppLink>
        <AppLink theme="inverted" to={"/about"}>
          About
        </AppLink>
      </nav>
    </div>
  );
};
