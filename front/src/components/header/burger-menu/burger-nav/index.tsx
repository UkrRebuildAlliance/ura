import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { menuLinks } from '../../links';
import { BurgerBtn } from '../burger-btn';
import { BurgerList } from '../burger-list';

export const BurgerNav = ({}) => {
  const { t } = useTranslation();

  const [activeBtn, setActiveBtn] = useState<number>(-1);

  return (
    <>
      <div className=" flex flex-col max-w-[300px] laptop:max-w-full w-full self-start gap-7 laptop:hidden">
        <BurgerBtn
          btnId={0}
          activeBtn={activeBtn}
          onClick={setActiveBtn}
          text={t('navbar.activities')}
          links={menuLinks.activities}
        />

        <BurgerBtn
          btnId={1}
          activeBtn={activeBtn}
          onClick={setActiveBtn}
          links={menuLinks.about}
          text={t('navbar.about_us')}
        />

        <BurgerBtn
          btnId={3}
          activeBtn={activeBtn}
          href={menuLinks.contact}
          text={t('navbar.contacts')}
        />
      </div>

      <div className="justify-between hidden w-full h-20 laptop:flex">
        <BurgerList
          links={menuLinks.activities}
          text={t('navbar.activities')}
        />

        <BurgerList text={t('navbar.about_us')} links={menuLinks.about} />

        <Link
          to={menuLinks.contact}
          className="font-bold capitalize text-transparent bg-mainGradient bg-clip-text font-montserrat text-[26px] h-fi w-full h-min text-center max-w-[172px] hover:border-b hover:border-borderP hover:scale-110 transition duration-150"
        >
          {t('navbar.contacts')}
        </Link>
      </div>
    </>
  );
};
