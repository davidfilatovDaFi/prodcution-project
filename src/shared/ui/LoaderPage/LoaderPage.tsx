import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from '../Loader/Loader';
import cls from './LoaderPage.module.scss';

interface LoaderPageProps {
  className?: string;
}

export const LoaderPage = ({ className }: LoaderPageProps) => (
  <div className={classNames(cls.LoaderPage, {}, [className])}>
    <Loader />
  </div>
);
