import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

type Theme = 'primary' | 'inverted';

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: Theme;
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  theme = 'primary',
  ...props
}) => (
  <Link
    className={classNames(cls.AppLink, {}, [className, cls[theme]])}
    {...props}
  >
    {children}
  </Link>
);
