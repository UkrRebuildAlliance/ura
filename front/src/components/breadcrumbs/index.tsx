import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

import { Crumb } from './crumb';

type IAcc = {
  [key: string]: string;
};

interface IBreadcrumbs {
  className?: string;
}

export const Breadcrumbs = ({ className }: IBreadcrumbs) => {
  const { pathname } = useLocation();
  const initial = pathname.split('/');

  const crumbs = initial.reduce((acc: IAcc[], el: string, index: number) => {
    return [
      ...acc,
      {
        name: el === '' ? 'home' : el,
        path: initial.slice(0, index + 1).join('/') || '/',
      },
    ];
  }, []);

  const slicedCrumbs = crumbs.slice(0, 2);

  return (
    <div
      className={clsx(
        'flex gap-3 items-center w-fit mb-10 tablet:mb-[50px] desktop:mb-[100px]',
        className,
      )}
    >
      {slicedCrumbs.map(({ name, path }, idx) => {
        return (
          <Crumb
            idx={idx}
            name={name}
            path={path}
            key={`crumbs-${name}-${idx}`}
            crumbsLng={crumbs.length}
          />
        );
      })}
    </div>
  );
};
