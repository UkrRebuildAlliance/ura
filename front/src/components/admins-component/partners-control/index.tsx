import { Link } from 'react-router-dom';

import Delete from '@/assets/svg/delete.svg?react';

import { ButtonAdmin } from '..';
import { InfoPartnersProps } from './types';

export const PartnersControl = ({ data, baseHref }: InfoPartnersProps) => {
  return (
    <div className="flex flex-col gap-6 ">
      {data.map(({ id, name, src }) => (
        <Link
          to={`${baseHref}/${id}`}
          key={`news-main-${id}`}
          className="flex group/link transition-all duration-200 group-[btn] items-center justify-between  w-full gap-3 px-4 py-1 border border-transparent rounded-md shadow-xl laptop:flex-nowrap bg-partnersMatt hover:border-white"
        >
          <div className="max-w-[100px] w-full">
            <img
              src={src}
              alt={name}
              className="aspect-[1.53/1] object-contain"
            />
          </div>

          <span className="w-full text-white group-hover/link:text-black text-ellipsis line-clamp-1">
            {name}
          </span>

          <div className="flex justify-end gap-3 w-max">
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
