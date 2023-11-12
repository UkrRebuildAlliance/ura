import { LanguageSwitcher, Logo, Search } from '@/components';
import { SocialMedia } from '../social-media';

export const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-mainGradient pt-[38px] pb-6 bg-slate-600 py-1 px-5">
      <div className="max-w-[1620px] mx-auto">
        <div className="flex items-center justify-between pb-[26px] border-b border-[#ffffff65]">
          <LanguageSwitcher className="desktop:hidden" />
          <SocialMedia className="hidden desktop:flex" />
          <Logo />
          <Search />
        </div>
        <div></div>
        <LanguageSwitcher className="" />
      </div>
    </header>
  );
};
