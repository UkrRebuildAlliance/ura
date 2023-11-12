import SearchIcon from '@/assets/svg/social/search.svg?react';

export const Search = () => {
  return (
    <label className="flex max-w-[282px] w-full items-center px-[16px] h-[50px] gap-2 rounded-3xl border caret-white border-white">
      <button className="w-[30px] h-[30px] text-white">
        <SearchIcon />
      </button>
      <input
        className="w-full text-white bg-transparent border-0 outline-none"
        type="text"
      />
    </label>
  );
};
