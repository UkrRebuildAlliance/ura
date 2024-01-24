import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

import SearchIcon from '@/assets/svg/social/search.svg?react';

interface ISearch {
  className?: string;
  setIsBurgerActive?: Dispatch<SetStateAction<boolean>>;
}

export const Search = ({ className, setIsBurgerActive }: ISearch) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const sendRequest = () => {
    if (search.length < 3) return;

    navigate(`/search?name=${search}`);

    setSearch('');

    if (setIsBurgerActive) {
      setIsBurgerActive(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendRequest();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };

  return (
    <label
      className={clsx(
        'flex max-w-[282px] w-full items-center px-[16px] h-[50px] gap-3 rounded-[20px] border border-blueBlack',
        {},
        className,
      )}
    >
      <div
        onClick={() => sendRequest()}
        className={clsx(
          'w-[30px] h-[30px] flex items-center  justify-center cursor-pointer transition duration-150 active:scale-90 hover:scale-125',
        )}
      >
        <SearchIcon />
      </div>

      <input
        type="text"
        value={search}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={clsx(
          'w-full bg-transparent border-0 outline-none text-blueBlack',
        )}
      />
    </label>
  );
};
