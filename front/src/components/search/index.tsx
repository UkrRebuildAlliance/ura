import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

import SearchIcon from '@/assets/svg/social/search.svg?react';

export const Search = ({
  className,
  isPurple,
}: {
  className?: string;
  isPurple?: boolean;
}) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const sendRequest = () => {
    if (search.length < 3) return;
    navigate(`/search?name=${search}`);
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
        'flex max-w-[282px] w-full items-center px-[16px] h-[50px] gap-3 rounded-3xl border',
        {
          'border-borderP caret-borderP': isPurple,
          'border-white caret-white': !isPurple,
        },
        className,
      )}
    >
      <div
        onClick={() => sendRequest()}
        className={clsx(
          'w-[30px] h-[30px] flex items-center justify-center cursor-pointer transition duration-150 active:scale-90 hover:scale-125',
          {
            'text-borderP  ': isPurple,
            'text-white': !isPurple,
          },
        )}
      >
        <SearchIcon />
      </div>

      <input
        type="text"
        value={search}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={clsx('w-full bg-transparent border-0 outline-none', {
          'text-borderP  ': isPurple,
          'text-white': !isPurple,
        })}
      />
    </label>
  );
};
