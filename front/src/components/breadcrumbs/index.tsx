import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

import { Crumb } from './crumb';
import { IAcc, IBreadcrumbs } from './types';

export const Breadcrumbs = ({ className, isBanner }: IBreadcrumbs) => {
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
            {slicedCrumbs.map(({ name, path }, idx) => (
                <Crumb
                    idx={idx}
                    name={name}
                    path={path}
                    isBanner={isBanner}
                    crumbsLng={crumbs.length}
                    key={`crumbs-${name}-${idx}`}
                />
            ))}
        </div>
    );
};
