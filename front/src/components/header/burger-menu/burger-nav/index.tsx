import { useState, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { menuLinks } from '../../links';
import { BurgerBtn } from '../burger-btn';
import { BurgerList } from '../burger-list';

interface IBurgerNav {
  setIsBurgerActive: Dispatch<SetStateAction<boolean>>;
}

export const BurgerNav = ({ setIsBurgerActive }: IBurgerNav) => {
  const { t } = useTranslation();

  const [activeBtn, setActiveBtn] = useState<number>(-1);

  return (
    <>
      <div className=" flex flex-col max-w-[300px] laptop:max-w-full w-full self-start gap-7 laptop:hidden">
        <BurgerBtn
          btnId={0}
          activeBtn={activeBtn}
          onClick={setActiveBtn}
          links={menuLinks.activities}
          text={t('navbar.activities')}
          setIsBurgerActive={setIsBurgerActive}
        />

        <BurgerBtn
          btnId={1}
          activeBtn={activeBtn}
          onClick={setActiveBtn}
          links={menuLinks.about}
          text={t('navbar.about_us')}
          setIsBurgerActive={setIsBurgerActive}
        />

        <BurgerBtn
          btnId={3}
          activeBtn={activeBtn}
          href={menuLinks.contact}
          text={t('navbar.contacts')}
          setIsBurgerActive={setIsBurgerActive}
        />
      </div>

      <div className="justify-between hidden w-full h-20 laptop:flex">
        <BurgerList
          links={menuLinks.activities}
          text={t('navbar.activities')}
          setIsBurgerActive={setIsBurgerActive}
        />

        <BurgerList
          links={menuLinks.about}
          text={t('navbar.about_us')}
          setIsBurgerActive={setIsBurgerActive}
        />

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
