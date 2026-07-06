import { ButtonHTMLAttributes } from 'react';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'shared/model/theme';
import { Button } from 'shared/ui/Button/Button';

interface ThemeSwitchProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const ThemeSwitch = ({ className, ...props }: ThemeSwitchProps) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
      {...props}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
