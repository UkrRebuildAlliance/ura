import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { IBurgerList } from './types';

export const BurgerList = ({ className, links, text }: IBurgerList) => {
  return (
    <div className={clsx(className, `max-w-[172px] w-full`)}>
      <p className="font-bold capitalize text-transparent bg-mainGradient bg-clip-text font-montserrat text-[26px] mb-16 w-full text-center">
        {text}
      </p>

      <div className="flex flex-col items-center justify-center w-full gap-6">
        {links.map(({ name, href }, idx) => (
          <Link
            to={href}
            key={`${idx}-burger-laptop_${name}`}
            className="capitalize transition duration-150 font-montserrat text-borderP hover:scale-125"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};
