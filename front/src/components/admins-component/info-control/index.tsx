import { Link } from 'react-router-dom';

import Delete from '@/assets/svg/delete.svg?react';

import { ButtonAdmin } from '..';
import { IInfoControlProps } from './types';

export const InfoControl = ({ data, baseHref }: IInfoControlProps) => {
  return (
    <div className="flex flex-col gap-6 ">
      {data.map(({ id, date, title }) => (
        <Link
          to={`${baseHref}/${id}`}
          key={`news-main-${id}`}
          className="flex flex-wrap group/link transition-all duration-200 group-[btn] items-center justify-center w-full gap-3 px-4 py-1 border border-transparent rounded-md shadow-xl laptop:justify-between laptop:flex-nowrap bg-partnersMatt hover:border-white"
        >
          <span className="text-white group-hover/link:text-black">{date}</span>

          <span className="w-full text-white group-hover/link:text-black text-ellipsis line-clamp-2 laptop:line-clamp-1">
            {title}
          </span>

          <div className="flex justify-end w-full gap-3 laptop:w-max">
            <ButtonAdmin
              variant="primary"
              onClick={(e) => {
                e.preventDefault();
                console.log('Delete');
              }}
              icon={
                <Delete className="w-[25px] fill-partnersMatt group-hover/btn:fill-warning transition-all duration-200" />
              }
            />
          </div>
        </Link>
      ))}
    </div>
  );
};
