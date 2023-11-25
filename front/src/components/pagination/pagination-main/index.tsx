import clsx from 'clsx';

import { DOTS, usePagination } from '@/hooks';

import './style.css';
import { PaginationMainProps } from './types';

const PaginationMain = ({
  currentPage,
  onPageChange,
  siblingCount,
  totalPageCount,
  prevPageButton,
  nextPageButton,
}: PaginationMainProps): JSX.Element | null => {
  const paginationRange = usePagination({
    currentPage,
    siblingCount,
    totalPageCount,
  });

  if (currentPage === 0 || !paginationRange) {
    return null;
  }

  return (
    <>
      <div className="flex items-center gap-1">
        {prevPageButton}

        <ul className="flex items-center gap-4">
          {paginationRange.map((pageNumber, index) => {
            const key = String(pageNumber) + index;

            if (pageNumber === DOTS) {
              return (
                <li
                  key={key}
                  className="relative flex items-end justify-center w-8 h-8 pb-1 select-none sm:w-10 sm:h-10 pagination-text pagination-circle"
                >
                  &hellip;
                </li>
              );
            }
            return (
              <li
                key={key}
                onClick={() => onPageChange(pageNumber as number)}
                className={clsx(
                  'relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer pagination-circle',
                  {
                    'bg-pgGradient': pageNumber === currentPage,
                  },
                )}
              >
                <span
                  className={clsx(
                    'flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-[14px] tablet:text-[22px] rounded-full overflow-hidden',
                    {
                      ' text-white': pageNumber === currentPage,
                    },
                    {
                      'pagination-text': pageNumber !== currentPage,
                    },
                  )}
                >
                  {pageNumber}
                </span>
              </li>
            );
          })}
        </ul>

        {nextPageButton}
      </div>
    </>
  );
};

export { PaginationMain };
