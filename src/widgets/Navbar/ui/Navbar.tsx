import { ThemeSwitch } from 'features/ThemeSwitch';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitch />
      <nav>
        <AppLink theme='inverted' to='/'>
          {t('page.main')}
        </AppLink>
        <AppLink theme='inverted' to='/about'>
          {t('page.about')}
        </AppLink>
      </nav>
    </div>
  );
};
