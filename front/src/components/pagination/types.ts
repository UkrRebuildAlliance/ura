export interface PaginationProps {
  pageSize?: number;
  totalCount: number;
  className?: string;
  currentPage: number;
  siblingCount?: number;
  onPageChange: (page: number) => void;
}

export interface PaginationComponentsCommonProps {
  currentPage: number;
  totalPageCount: number;
  prevPageButton: JSX.Element;
  nextPageButton: JSX.Element;
}
