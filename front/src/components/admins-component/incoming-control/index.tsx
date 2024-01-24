import clsx from 'clsx';
import { Link } from 'react-router-dom';

import Delete from '@/assets/svg/delete.svg?react';

import { ButtonAdmin } from '..';
import { IIncomingControlProps } from './types';

export const IncomingControl = ({ data, baseHref }: IIncomingControlProps) => {
  return (
    <div className="flex flex-col gap-6 ">
      {data.map(({ id, date, content, email, isRead }) => (
        <Link
          to={`${baseHref}/${id}`}
          key={`news-main-${id}`}
          className={clsx(
            'flex flex-wrap justify-between group/link transition-all duration-200 group-[btn] items-center w-full gap-3 px-4 py-1 border border-transparent rounded-md shadow-xl hover:border-white',
            {
              'bg-[#B08D57]': !isRead,
              'bg-crumbsText': isRead,
            },
          )}
        >
          <span className="text-white group-hover/link:text-black">
            {email}
          </span>

          <span className="text-white group-hover/link:text-black -order-1">
            {date}
          </span>

          <span className="w-full text-white group-hover/link:text-black text-ellipsis line-clamp-3 laptop:line-clamp-1">
            {content}
          </span>

          {isRead && (
            <div className="flex justify-end w-full gap-3 ml-auto laptop:w-max">
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
          )}
        </Link>
      ))}
    </div>
  );
};
