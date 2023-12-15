import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { LanguageSwitcher, Search } from '@/components';

import { menuLinks } from '../links';
import clsx from 'clsx';

interface IHeaderNav {
    isHeaderHidden: boolean;
}

export const HeaderNav = ({ isHeaderHidden }: IHeaderNav) => {
    const { t } = useTranslation();
    const [activeSubMenu, setActiveSubMenu] = useState<number>(-1);

    const btns = [t('navbar.activities'), t('navbar.about_us')];

    const onMouseEnter = (idx: number) => {
        setActiveSubMenu(idx);
    };

    const onMouseLeave = () => {
        setActiveSubMenu(-1);
    };

    useEffect(() => {
        if (isHeaderHidden) {
            setActiveSubMenu(-1);
        }
    }, [isHeaderHidden]);

    return (
        <div className="hidden desktop:flex gap-[50px] relative">
            {btns.map((btn, idx) => {
                const getter = idx === 0 ? 'activities' : 'about';
                const menu = menuLinks[getter];

                return (
                    <div
                        key={`menu-${idx}-header`}
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={() => onMouseEnter(idx)}
                        className="flex max-w-[110px] w-full items-center justify-center capitalize text-blueBlack text-[20px] font-normal cursor-pointer"
                    >
                        <span>{btn}</span>

                        {idx === activeSubMenu && !isHeaderHidden && (
                            <div
                                className={clsx(
                                    'absolute flex flex-col top-[calc(50%+20px)] animate-fadeIn w-full bg-white rounded-b-[20px] shadow-md -translate-x-1/2 left-1/2 px-[56px] py-[24px] transition-all duration-500',
                                )}
                            >
                                {menu.map(({ name, href }, idx) => (
                                    <Link
                                        key={`submenu-${idx}-header`}
                                        to={href}
                                        className={`group py-8 font-normal text-[38px] border-b border-blueBlack last:border-0 border-opacity-[0.24]`}
                                    >
                                        <span className="relative group-hover:after:w-full after:transition-all after:duration-200 max-w-max after:w-0  after:absolute after:bottom-0 after:block after:h-[1px] after:bg-blueBlack">
                                            {name}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}

            <Link
                to={menuLinks.contact}
                className="outline-none flex w-[110px] items-center justify-center capitalize text-blueBlack text-[20px] font-normal cursor-pointer hover:scale-110 transition duration-300"
            >
                {t('navbar.contacts')}
            </Link>

            <Search className="hidden desktop:flex" />

            <LanguageSwitcher />
        </div>
    );
};
