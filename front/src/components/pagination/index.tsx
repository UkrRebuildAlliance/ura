import ChevronLeft from '@/assets/svg/chevron-left.svg?react';
import ChevronRight from '@/assets/svg/chevron-right.svg?react';

import { PaginationMain } from './pagination-main';
import { PaginationComponentsCommonProps, PaginationProps } from './types';

const Pagination = ({
  className,
  totalCount,
  currentPage,
  onPageChange,
  pageSize = 20,
  siblingCount = 0,
}: PaginationProps): JSX.Element | null => {
  const totalPageCount = Math.ceil(totalCount / pageSize);

  const onNext = () => onPageChange(currentPage + 1);
  const onPrevious = () => onPageChange(currentPage - 1);

  const commonProps: PaginationComponentsCommonProps = {
    currentPage,
    totalPageCount,
    prevPageButton: (
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className="disabled:select-none disabled:opacity-30"
      >
        <ChevronLeft />
      </button>
    ),
    nextPageButton: (
      <button
        onClick={onNext}
        disabled={currentPage === totalPageCount}
        className="disabled:select-none disabled:opacity-30"
      >
        <ChevronRight />
      </button>
    ),
  };

  return (
    <div className={`${className ? className : ''}`}>
      <PaginationMain
        onPageChange={onPageChange}
        siblingCount={siblingCount}
        {...commonProps}
      />
    </div>
  );
};

export { Pagination };
